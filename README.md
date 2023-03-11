## コードの説明（適宜更新します）
- index.html→ログイン画面です。まだ作成中です。
- practice.html→添付画像参照。
- nikoniko.html→ボタンを押したら文字が流れる画面。
- nikoniko_form.html→フォーム（最新版）
- ninoniko_text.html→ニコニコ風動画（最新版）

## OBS使い方
### 設定方法
1.インストール

2.シーンを追加（＋ボタンを押す）

<img width="213" alt="スクリーンショット 2022-09-03 18 05 10" src="https://user-images.githubusercontent.com/33302983/188263882-d7e634a4-1cb4-4c5d-a99e-7e4ca7785ea6.png">

3.映像キャプチャを追加（自分の顔を映すやつ）
※プロパティからカメラの設定を自分のOS内蔵のカメラに変更するのを忘れずに

4.ウィンドウキャプチャを追加（どのウィンドウを映し出すかを選択する）
<img width="878" alt="スクリーンショット 2022-09-03 18 15 59" src="https://user-images.githubusercontent.com/33302983/188264231-69bbd155-9be2-4bc0-93df-b9af2c4b653a.png">



#### ※注意
ソースの順番（映像キャプチャとウィンドウキャプチャの順番）に注意。
⇒「映像キャプチャ」は一番上に置いておく（ウィンドウキャプチャの上に映像キャプチャが重なるようなイメージ）

<img width="199" alt="スクリーンショット 2022-09-03 21 07 37" src="https://user-images.githubusercontent.com/33302983/188269768-11d2b3fb-ba92-49da-8397-e0fe3cfec478.png">

<img width="769" alt="スクリーンショット 2022-09-03 18 29 23" src="https://user-images.githubusercontent.com/33302983/188264700-23afbe08-4cd5-4dfa-9e0c-93bfeb8675f7.png">




## BackGroundRemovalの使い方
やり方は以下の記事に詳しく書いてあります。

https://gigazine.net/news/20220403-obs-backgroundremoval/

#### 簡単に手順記載
1.インストール

https://github.com/royshil/obs-backgroundremoval/releases

Windowsは以下からインストール

<img width="720" alt="スクリーンショット 2022-09-03 21 12 51" src="https://user-images.githubusercontent.com/33302983/188269926-b3a61a79-a49a-42f8-856a-2fb1d87a7948.png">

2.インストールしたファイルを解凍

3.OBSのダウンロードファイルに、2を移す

<img width="744" alt="スクリーンショット 2022-09-03 21 15 15" src="https://user-images.githubusercontent.com/33302983/188269998-1dafe331-ae2a-4fca-8fb7-4ba18542c23a.png">

4.一旦OBSを落としたのち再度起動。
映像キャプチャ＜フィルタ＜＋を押すと「BackGroundRemoval」表記が出てくる

<img width="463" alt="スクリーンショット 2022-09-03 21 17 21" src="https://user-images.githubusercontent.com/33302983/188270055-aeadf9c9-975d-40fc-95f3-5bb699665161.png">

5.以上です！

### Zoomに繋ぐ方法
1.OBSの仮想カメラを起動

2.ZoomのカメラもOBS virtual cameraを選択

<img width="571" alt="スクリーンショット 2022-09-03 21 24 14" src="https://user-images.githubusercontent.com/33302983/188270250-6d6e09c9-9eb8-400f-adc7-114c2aba2b92.png">

3.以上です！
