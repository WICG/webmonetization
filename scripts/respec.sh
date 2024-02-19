#!/bin/bash -u
# We use set -e and bash with -u to bail on first non zero exit code of any
# processes launched or upon any unbound variable.
# We use set -x to print commands before running them to help with
# debugging.
set -ex

TIDY_PATH="$(brew --prefix)/bin/tidy"
REPO_ROOT=$(git rev-parse --show-toplevel)
# Prettier removed, as it conflicts with W3C spec code format style
# If Prettier allows removal of trailing slashes on void elements,
# it can be allowed back into the workflow.
# PRETTIER_PATH="$REPO_ROOT/node_modules/.bin/prettier"

SPEC_PATH="$REPO_ROOT/src/pages/specification"
RESPEC_SOURCE="$SPEC_PATH/specification-respec.html"
RESPEC_STATIC="$SPEC_PATH/index.html"

# "$PRETTIER_PATH" "$SPEC_PATH/includes" --write
"$TIDY_PATH" -config "$REPO_ROOT/scripts/tidyconfig.txt" -m "$RESPEC_SOURCE"

pushd $SPEC_PATH
# respec doesn't support absolute paths
npx respec --localhost specification-respec.html index.html
popd

"$TIDY_PATH" -config "$REPO_ROOT/scripts/tidyconfig.txt" --hide-comments yes -m "$RESPEC_STATIC"
