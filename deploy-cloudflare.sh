#!/bin/sh
set -eu

# This repository is a static Cloudflare Pages site, not a Worker with assets.
# Run this script from any directory; Wrangler publishes the repository root.
repo_root=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
cd "$repo_root"
exec npx wrangler pages deploy . --project-name nexparty "$@"
