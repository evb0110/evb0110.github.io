#!/bin/bash

echo "Analyzing PDF pages for upside-down content..."
echo "This may take a while..."
echo

upside_down_pages=()
total_files=0

for file in pg_*.pdf; do
    if [[ -f "$file" ]]; then
        ((total_files++))
        
        # Extract text content
        text=$(pdftotext "$file" - 2>/dev/null)
        
        if [[ -n "$text" ]]; then
            # Check for signs that text might be upside down
            # Look for unusual patterns that suggest inverted text
            
            # Count normal vs suspicious patterns
            normal_patterns=0
            suspicious_patterns=0
            
            # Check for typical dictionary/book patterns (normal orientation)
            if echo "$text" | grep -q -E "(^[A-Z]|[0-9]+\.|^\s*[a-z])" 2>/dev/null; then
                ((normal_patterns++))
            fi
            
            # Check for page numbers at top (normal)
            if echo "$text" | head -3 | grep -q -E "^[0-9]+\s*$" 2>/dev/null; then
                ((normal_patterns++))
            fi
            
            # Check for Werner Arnold, Harrassowitz, or other publisher info at expected positions
            if echo "$text" | grep -q -E "(Werner Arnold|Harrassowitz)" 2>/dev/null; then
                first_line=$(echo "$text" | head -1)
                if [[ "$first_line" =~ (Werner|Arnold|Harrassowitz) ]]; then
                    ((normal_patterns++))
                else
                    ((suspicious_patterns++))
                fi
            fi
            
            # Check if text appears to have unusual character sequences that might indicate rotation
            if echo "$text" | grep -q -E "^[^A-Za-z0-9]*$" 2>/dev/null && [[ ${#text} -gt 10 ]]; then
                ((suspicious_patterns++))
            fi
            
            # For dictionary pages, check if entries start appropriately
            if echo "$text" | grep -q -E "^[a-z]+" 2>/dev/null; then
                first_word=$(echo "$text" | grep -o -E "^[a-z]+" | head -1)
                # Check if it looks like a reasonable dictionary entry
                if [[ ${#first_word} -ge 2 ]]; then
                    ((normal_patterns++))
                fi
            fi
            
            # Simple heuristic: if we see more suspicious than normal patterns, flag it
            if [[ $suspicious_patterns -gt $normal_patterns ]] && [[ $suspicious_patterns -gt 0 ]]; then
                upside_down_pages+=("$file")
                echo "SUSPICIOUS: $file (suspicious: $suspicious_patterns, normal: $normal_patterns)"
                echo "  First few lines:"
                echo "$text" | head -3 | sed 's/^/    /'
                echo
            fi
        fi
        
        # Progress indicator
        if [[ $((total_files % 50)) -eq 0 ]]; then
            echo "Processed $total_files files..."
        fi
    fi
done

echo
echo "Analysis complete. Processed $total_files files."
echo "Potentially upside-down pages: ${#upside_down_pages[@]}"
for page in "${upside_down_pages[@]}"; do
    echo "  $page"
done