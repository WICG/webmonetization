#!/usr/bin/env bash

REPO_ROOT=$(git rev-parse --show-toplevel)

TIDY_CONFIG=$REPO_ROOT/scripts/tidyconfig.txt
TIDY_CONFIG_INCLUDES=$REPO_ROOT/scripts/tidyconfig-includes.txt

# specification/includes/*.html are code examples rendered as text and are
# intentionally not formatted: tidy cannot format fragments that consist of
# <head> content (e.g. <link>, <script>) without adding or dropping markup.

tidy -config $TIDY_CONFIG -m specification/index.html

tidy -config $TIDY_CONFIG -m specification/extensions-api/index.html
tidy -config $TIDY_CONFIG_INCLUDES -m specification/extensions-api/section/*.html

tidy -config $TIDY_CONFIG -m specification/flows/index.html
tidy -config $TIDY_CONFIG_INCLUDES -m specification/flows/section/*.html
