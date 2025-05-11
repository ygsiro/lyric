# 歌詞

歌うさいのメモ

## リポジトリ独自要素

カスタム要素をjavascriptで定義しています。  
定義しているだけなので今後何か変機能追加したい

### Call and responce

`<cr>`タグで囲むことで合いの手を表します

### Junction

`<ju>/</ju>`で区切りを表します

### Bless

`<v>V</v>`で息を吸うところを表します

### 母音

`<vo>`で囲むこんで母音や伸ばしを表します

## その他

### テンプレート

"歌名".htmlの空のファイルを作成し`lyric`スニペットを呼び出す事で歌詞用テンプレートを呼び出します。

どうなっているか知りたい場合は`.vscode>lyric.code-snippets`を参照

### ルビをふるショートカット

1) **設定** → **スニペット** → **html**を選び**html.json**に以下のスニペットを追加

```json
{
	"Ruby": {
		"body": "<ruby>$TM_SELECTED_TEXT<rp>(</rp><rt>$1</rt><rp>)</rp></ruby>$0"
	}
}
```

2) **設定** → **キーボードショートカット** → **キーボードショートカットを開く** → **keybindings.json**に以下のショートカットを追加

**key**の**ctrl+3**は適宜好きなショートカットを割り当てしてください

```json
[
  {
    "key": "ctrl+3",
    "command": "editor.action.insertSnippet",
    "when": "editorTextFocus",
    "args": {
      "langId": "html",
      "name": "Ruby"
    }
  }
]
```