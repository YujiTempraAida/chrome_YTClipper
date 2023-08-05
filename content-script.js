console.log("コンテントスクリプトだよ");

// イベントリスナー
window.addEventListener("load", main, false);

// メイン関数
function main() {
  const jsInitCheckTimer = setInterval(function(){
    if (document.getElementById('player') != null) {
      clearInterval(jsInitCheckTimer);
    }

    // スタートボタンを出す関数
    initStartButton()

    // イベントリスナー
    document.getElementById('ytc-initButton').addEventListener('click',initUI)

  }, 1000);
}

// スタートボタンを出す関数
function initStartButton(){
  // コントロール要素を取得
  const controllAreaElement = document.getElementsByClassName('ytp-left-controls')[0];
  const playButton = document.getElementsByClassName('ytp-play-button ytp-button')[0];
  
  
  // スタートボタンとその親要素を作成
  let addElem = document.createElement('button');
  // addElem.id = 'ytc-area-wrapper';
  addElem.id = 'ytc-initButton';
  addElem.classList.add('ytp-button');
  addElem.innerHTML = `
    <img src="https://cdn.discordapp.com/attachments/1137246828664987758/1137249342693064736/clapperboard-open-svgrepo-com.svg" id="ytc-initButton-icon">
  `
  playButton.parentNode.insertBefore(addElem, playButton.nextElementSibling);
}

// スタートボタンを押して、最初のUIを出す関数
function initUI(){
  console.log('郁代ボタンが押された');
  
  // 重複防止
  if (document.getElementById("ytc-area-wrapper") != null) {
    return
  }

  // YTCエリアを取得
  const player = document.getElementById('player');
  

  
  // 追加するUI要素を作成
  let addElem = document.createElement('div');
  addElem.id = "ytc-area-wrapper";
  addElem.innerHTML = `

  <div id="ytc-match">
    <ul id="ytc-match-list">
      <li>
        <span id="ytc-match-01-index">match-01</span>
        <button id="ytc-match-01-inButton" >in</button>
        <input id="ytc-match-01-in" type="text" size="4"></input>
        <button id="ytc-match-01-outButton">out</button>
        <input id="ytc-match-01-out" type="text" size="4"></input>
        <label>p1Name<input id="ytc-match-01-p1Name" type="text" size="8"></input></label>
        <label>p1Char<input id="ytc-match-01-p1Name" type="text" size="8"></input></label>
        <label>p2Name<input id="ytc-match-01-p2Name" type="text" size="8"></input></label>
        <label>p2Char<input id="ytc-match-01-p2Char" type="text" size="8"></input></label>
        <button id="ytc-match-01-addButton">next</button>
      </li>
    </ul>
  </div>
  
  <div id="ytc-tournament">
    <details>
      <summary>トーナメント情報</summary>
      <li><label>トーナメント名: <input id="ytc-tournametName" type="text"></label></li>
      <li><label>トーナメントURL: <input id="ytc-tournamentURL" type="text"></label></li>
    </details>
  </div>

  <div id="ytc-options">
    <details>
      <summary>アップロードオプション</summary>
      <li>
        <label>子供向け: 
          <input name="ytc-options-child" id="opt_child" type="radio" value="False" checked>いいえ
          <input name="opt_child" id="opt_child" type="radio" value="True">はい
        </label>
      </li>
      <li>
        <label>カテゴリ: 
          <input name="opt_category" id="opt_category" type="radio" value="game" checked>ゲーム
          <input name="opt_category" id="opt_category" type="radio" value="blog">ブログ
        </label>
      </li>
      <li>
        <label>公開設定: 
          <input name="opt_publicity" id="opt_publicity" type="radio" value="unlisted" checked>限定公開
          <input name="opt_publicity" id="opt_publicity" type="radio" value="public">公開
        </label>
      </li>
      <li>
        <label>タイトルテンプレ: <textarea id="opt_template_title" type="text"></textarea></label><br>
      </li>
      <li>
        <label>概要欄テンプレ: <textarea id="opt_template_about" type="text"></textarea></label><br>
      </li>
      <li>
        <label>タグテンプレ: <textarea id="opt_template_tag" type="text"></textarea></label><br>
      </li>
    </details>

    <div id="ytc-buttons">
      <button id="ytc-exportButton">イクスポート</button>
      <button id="ytc-inportButton">インポート</button>
      <button id="ytc-closeButton">閉じる</button>
    </div>
  `

  // YTCエリア
  player.parentNode.insertBefore(addElem, player.nextElementSibling);

  // イベントリスナー
  document.getElementById('ytc-exportButton').addEventListener('click',exportData)
  document.getElementById('ytc-inportButton').addEventListener('click',importData)
  document.getElementById('ytc-closeButton').addEventListener('click',closeUI)

}

// イクスポートを押したときの挙動
function exportData(){
  console.log("イクスポートボタンが押されました");
}

// インポートを押したときの関数
function importData(){
  console.log("インポートボタンが押されました");
}

// 閉じるを押したときの関数
function closeUI(){
  console.log("閉じるボタンが押されました");
  // メインUIを削除
  document.getElementById("ytc-area-wrapper").remove()
};