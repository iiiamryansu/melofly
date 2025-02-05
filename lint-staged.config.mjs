const config = {
  '*.{css,json,yml,md}': ['prettier --write'],
  '*.{mjs,js,ts,vue}': ['eslint --fix', 'prettier --write'],
}

export default config
