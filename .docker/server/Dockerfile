FROM node:22

# 作業ディレクトリを作成
WORKDIR /app

# package.json, package-lock.json のみコピー（キャッシュ効かせるため）
COPY package*.json ./

# 依存インストール
RUN npm install

# tsconfig.json など設定ファイルも必要に応じて後でコピー可能
# アプリのコードは volume マウントされる想定なので COPY しない

# 開放ポート（アプリが listen する）
EXPOSE 9010

# 起動コマンド（ts-nodeでTypeScriptを直接実行）
CMD ["npx", "ts-node", "server/server.ts"]
