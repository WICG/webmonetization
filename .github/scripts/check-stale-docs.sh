#!/bin/bash
DOCS_DIR="src/content/docs"
THRESHOLD_DAYS=180
THRESHOLD=$(date -d "$THRESHOLD_DAYS days ago" +%s)

echo "## Stale pages (not updated in $THRESHOLD_DAYS+ days)"
echo ""

found=0
while IFS= read -r -d '' file; do
  [[ "$file" == *"/es/"* ]] && continue
  [[ "$file" == *"404"* ]] && continue

  last_commit=$(git log -1 --format="%ct" -- "$file")
  [[ -z "$last_commit" ]] && continue

  if [[ "$last_commit" -lt "$THRESHOLD" ]]; then
    last_date=$(git log -1 --format="%ci" -- "$file" | cut -c1-10)
    days=$(( ($(date +%s) - last_commit) / 86400 ))
    rel="${file#$DOCS_DIR/}"
    echo "- $rel | Last updated: $last_date | ${days} days ago"
    found=1
  fi
done < <(find "$DOCS_DIR" \( -name "*.mdx" -o -name "*.md" \) -print0)

[[ $found -eq 0 ]] && echo "No stale pages found."
exit 0
