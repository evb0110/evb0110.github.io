#!/bin/bash

echo "Checking PDF page rotations..."
echo "Pages with non-zero rotation:"
echo

upside_down_pages=()

for file in static/pdf/Arnold-Woerterbuch/pg_*.pdf; do
    if [[ -f "$file" ]]; then
        rotation=$(pdftk "$file" dump_data | grep "PageMediaRotation:" | cut -d' ' -f2)
        filename=$(basename "$file")
        
        if [[ "$rotation" == "180" ]]; then
            upside_down_pages+=("$filename")
            echo "$filename: UPSIDE DOWN (rotation: ${rotation}°)"
        elif [[ "$rotation" != "0" && "$rotation" != "" ]]; then
            echo "$filename: rotated ${rotation}°"
        fi
    fi
done

echo
echo "Summary:"
echo "Found ${#upside_down_pages[@]} upside down pages:"
for page in "${upside_down_pages[@]}"; do
    echo "  $page"
done