#!/bin/bash

# Take a sample PDF and rotate it 180 degrees to understand how upside-down text looks
SAMPLE_PAGE="static/pdf/Arnold-Woerterbuch/pg_0100.pdf"
ROTATED_PAGE=".devkit/cache/pg_0100_rotated.pdf"

echo "Creating rotated sample for comparison..."

# Rotate the page 180 degrees using pdftk
pdftk "$SAMPLE_PAGE" cat 1south output "$ROTATED_PAGE"

echo "Original page text:"
echo "=================="
pdftotext "$SAMPLE_PAGE" - | head -10

echo
echo "Rotated page text:"
echo "=================="
pdftotext "$ROTATED_PAGE" - | head -10

echo
echo "Files created:"
echo "- Original: $SAMPLE_PAGE"
echo "- Rotated: $ROTATED_PAGE"