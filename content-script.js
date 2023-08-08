console.log("コンテントスクリプトだよ");

const fighters = [
  {
      "option":"01",
      "name_en":"Mario",
      "name_jp":"マリオ"
  },
  {
      "option":"02",
      "name_en":"Donkey Kong",
      "name_jp":"ドンキーコング"
  },
  {
      "option":"03",
      "name_en":"Link",
      "name_jp":"リンク"
  },
  {
      "option":"04",
      "name_en":"Samus",
      "name_jp":"サムス"
  },
  {
      "option":"04e",
      "name_en":"DarkSamus",
      "name_jp":"ダークサムス"
  },
  {
      "option":"05",
      "name_en":"Yoshi",
      "name_jp":"ヨッシー"
  },
  {
      "option":"06",
      "name_en":"Kirby",
      "name_jp":"カービィ"
  },
  {
      "option":"07",
      "name_en":"Fox",
      "name_jp":"フォックス"
  },
  {
      "option":"08",
      "name_en":"Pikachu",
      "name_jp":"ピカチュウ"
  },
  {
      "option":"09",
      "name_en":"Luigi",
      "name_jp":"ルイージ"
  },
  {
      "option":"10",
      "name_en":"Ness",
      "name_jp":"ネス"
  },
  {
      "option":"11",
      "name_en":"Captain Falcon",
      "name_jp":"キャプテン・ファルコン"
  },
  {
      "option":"12",
      "name_en":"Jigglypuff",
      "name_jp":"プリン"
  },
  {
      "option":"13",
      "name_en":"Peach",
      "name_jp":"ピーチ"
  },
  {
      "option":"13e",
      "name_en":"Daisy",
      "name_jp":"デイジー"
  },
  {
      "option":"14",
      "name_en":"Bowser",
      "name_jp":"クッパ"
  },
  {
      "option":"15",
      "name_en":"Ice Climbers",
      "name_jp":"アイスクライマー"
  },
  {
      "option":"16",
      "name_en":"Sheik",
      "name_jp":"シーク"
  },
  {
      "option":"17",
      "name_en":"Zelda",
      "name_jp":"ゼルダ"
  },
  {
      "option":"18",
      "name_en":"Dr. Mario",
      "name_jp":"ドクターマリオ"
  },
  {
      "option":"19",
      "name_en":"Pichu",
      "name_jp":"ピチュー"
  },
  {
      "option":"20",
      "name_en":"Falco",
      "name_jp":"ファルコ"
  },
  {
      "option":"21",
      "name_en":"Marth",
      "name_jp":"マルス"
  },
  {
      "option":"21e",
      "name_en":"Lucina",
      "name_jp":"ルキナ"
  },
  {
      "option":"22",
      "name_en":"Young Link",
      "name_jp":"こどもリンク"
  },
  {
      "option":"23",
      "name_en":"Ganondorf",
      "name_jp":"ガノンドロフ"
  },
  {
      "option":"24",
      "name_en":"Mewtwo",
      "name_jp":"ミュウツー"
  },
  {
      "option":"25",
      "name_en":"Roy",
      "name_jp":"ロイ"
  },
  {
      "option":"25e",
      "name_en":"Chrom",
      "name_jp":"クロム"
  },
  {
      "option":"26",
      "name_en":"Mr. Game & Watch",
      "name_jp":"Mr.ゲーム＆ウォッチ"
  },
  {
      "option":"27",
      "name_en":"Meta Knight",
      "name_jp":"メタナイト"
  },
  {
      "option":"28",
      "name_en":"Pit",
      "name_jp":"ピット"
  },
  {
      "option":"28e",
      "name_en":"Dark Pit",
      "name_jp":"ブラックピット"
  },
  {
      "option":"29",
      "name_en":"Zero Suit Samus",
      "name_jp":"ゼロスーツサムス"
  },
  {
      "option":"30",
      "name_en":"Wario",
      "name_jp":"ワリオ"
  },
  {
      "option":"31",
      "name_en":"Snake",
      "name_jp":"スネーク"
  },
  {
      "option":"32",
      "name_en":"Ike",
      "name_jp":"アイク"
  },
  {
      "option":"33",
      "name_en":"Pokémon Trainer",
      "name_jp":"ポケモントレーナー"
  },
  {
      "option":"36",
      "name_en":"Diddy Kong",
      "name_jp":"ディーディーコング"
  },
  {
      "option":"37",
      "name_en":"Lucas",
      "name_jp":"リュカ"
  },
  {
      "option":"38",
      "name_en":"Sonic",
      "name_jp":"ソニック"
  },
  {
      "option":"39",
      "name_en":"King Dedede",
      "name_jp":"デデデ"
  },
  {
      "option":"40",
      "name_en":"Olimar",
      "name_jp":"ピクミン＆オリマー"
  },
  {
      "option":"41",
      "name_en":"Lucario",
      "name_jp":"ルカリオ"
  },
  {
      "option":"42",
      "name_en":"R.O.B.",
      "name_jp":"ロボット"
  },
  {
      "option":"43",
      "name_en":"Toon Link",
      "name_jp":"トゥーンリンク"
  },
  {
      "option":"44",
      "name_en":"Wolf",
      "name_jp":"ウルフ"
  },
  {
      "option":"45",
      "name_en":"Villager",
      "name_jp":"むらびと"
  },
  {
      "option":"46",
      "name_en":"Mega Man",
      "name_jp":"ロックマン"
  },
  {
      "option":"47",
      "name_en":"Wii Fit Trainer",
      "name_jp":"Wii Fit トレーナー"
  },
  {
      "option":"48",
      "name_en":"Rozalina & Luma",
      "name_jp":"ロゼッタ＆チコ"
  },
  {
      "option":"49",
      "name_en":"Little Mac",
      "name_jp":"リトル・マック"
  },
  {
      "option":"50",
      "name_en":"Greninja",
      "name_jp":"ゲッコウガ"
  },
  {
      "option":"51",
      "name_en":"Mii Brawler",
      "name_jp":"格闘Mii"
  },
  {
      "option":"52",
      "name_en":"Mii SwordFighter",
      "name_jp":"剣術Mii"
  },
  {
      "option":"53",
      "name_en":"Mii Gunner",
      "name_jp":"射撃Mii"
  },
  {
      "option":"54",
      "name_en":"Palutena",
      "name_jp":"パルテナ"
  },
  {
      "option":"55",
      "name_en":"Pac-Man",
      "name_jp":"パックマン"
  },
  {
      "option":"56",
      "name_en":"Robin",
      "name_jp":"ルフレ"
  },
  {
      "option":"57",
      "name_en":"Shulk",
      "name_jp":"シュルク"
  },
  {
      "option":"58",
      "name_en":"Bowser Jr.",
      "name_jp":"クッパジュニア"
  },
  {
      "option":"59",
      "name_en":"Duck Hunt",
      "name_jp":"ダックハント"
  },
  {
      "option":"60",
      "name_en":"Ryu",
      "name_jp":"リュウ"
  },
  {
      "option":"60e",
      "name_en":"Ken",
      "name_jp":"ケン"
  },
  {
      "option":"61",
      "name_en":"Cloud",
      "name_jp":"クラウド"
  },
  {
      "option":"62",
      "name_en":"Corrin",
      "name_jp":"カムイ"
  },
  {
      "option":"63",
      "name_en":"Bayonetta",
      "name_jp":"ベヨネッタ"
  },
  {
      "option":"64",
      "name_en":"Inkling",
      "name_jp":"インクリング"
  },
  {
      "option":"65",
      "name_en":"Ridley",
      "name_jp":"リドリー"
  },
  {
      "option":"66",
      "name_en":"Simon",
      "name_jp":"シモン"
  },
  {
      "option":"66e",
      "name_en":"Richier",
      "name_jp":"リヒター"
  },
  {
      "option":"67",
      "name_en":"King K. Rool",
      "name_jp":"キングクルール"
  },
  {
      "option":"68",
      "name_en":"Isabelle",
      "name_jp":"しずえ"
  },
  {
      "option":"69",
      "name_en":"Incineroar",
      "name_jp":"ガオガエン"
  },
  {
      "option":"70",
      "name_en":"Piranha Plant",
      "name_jp":"パックンフラワー"
  },
  {
      "option":"71",
      "name_en":"Joker",
      "name_jp":"ジョーカー"
  },
  {
      "option":"72",
      "name_en":"Hero",
      "name_jp":"勇者"
  },
  {
      "option":"73",
      "name_en":"Banjo & Kazooie",
      "name_jp":"バンジョー＆カズーイ"
  },
  {
      "option":"74",
      "name_en":"Terry",
      "name_jp":"テリー"
  },
  {
      "option":"75",
      "name_en":"Byleth",
      "name_jp":"ベレト"
  },
  {
      "option":"76",
      "name_en":"Min Min",
      "name_jp":"ミェンミェン"
  },
  {
      "option":"77",
      "name_en":"Steve",
      "name_jp":"スティーブ"
  },
  {
      "option":"78",
      "name_en":"Sephiroth",
      "name_jp":"セフィロス"
  },
  {
      "option":"79",
      "name_en":"Pyra/Mythra",
      "name_jp":"ホムラ／ヒカリ"
  },
  {
      "option":"81",
      "name_en":"Kazuya",
      "name_jp":"カズヤ"
  },
  {
      "option":"82",
      "name_en":"Sora",
      "name_jp":"ソラ"
  }
]

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
  console.log("スタートボタンを出すよ");
  // コントロール要素を取得
  const controllAreaElement = document.getElementsByClassName('ytp-left-controls')[0];
  const playButton = document.getElementsByClassName('ytp-play-button ytp-button')[0];
  
  const buttonHeight = playButton.parentNode.offsetHeight;

  // スタートボタンとその親要素を作成
  let addElem = document.createElement('button');
  // addElem.id = 'ytc-area-wrapper';
  addElem.id = 'ytc-initButton';
  addElem.classList.add('ytp-button');
  addElem.innerHTML = `
    <img src="https://cdn.discordapp.com/attachments/1137246828664987758/1137928780267126904/clapperboard.png" id="ytc-initButton-icon" width=` + buttonHeight + ` height=` + buttonHeight + `>
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
    <form id="ytc-form-area" onsubmit="return false;">
      <div id="ytc-match">
        マッチ情報
        <ol id="ytc-match-list">
          <li>
            <input class="ytc-markInOutButton" type="text" size="3" placeholder="in" name="match.1.in"></input>
            <input class="ytc-markInOutButton" type="text" size="3" placeholder="out" name="match.1.out"></input>
            <input type="text" size="7" placeholder="p1Name" name="match.1.p1Name"></input>
            <select class="ytc-char" style="width: 80px" placeholder="p1Char" name="match.1.p1Char"></select>
            <input type="text" size="7" placeholder="p2Name" name="match.1.p2Name"></input>
            <select class="ytc-char" style="width: 80px" placeholder="p2Char" name="match.1.p2Char"></select>
            <input type="text" size="7" placeholder="round" name="match.1.round"></input>
            <button type="button" class="ytc-addItemButton">+</button>
          </li>
        </ol>
      </div>
      
      <div id="ytc-tournament">
        <details>
          <summary>トーナメント情報</summary>
          <li><label>トーナメント名（日本語） <input type="text" name="tournament.nameJp"></input></label></li>
          <li><label>トーナメント名（英語） <input type="text" name="tournament.nameJp"></input></label></li>
          <li><label>トーナメントURL <input type="text" name="tournament.Url"></input></label></li>
        </details>
      </div>

      <div id="ytc-options">
        <details>
          <summary>アップロードオプション</summary>
          <li>
            <label>子供向け: 
              <input name="options.child" id="opt_child" type="radio" value="False" checked>いいえ
              <input name="options.child" id="opt_child" type="radio" value="True">はい
            </label>
          </li>
          <li>
            <label>カテゴリ: 
              <input name="options.category" id="opt_category" type="radio" value="game" checked>ゲーム
              <input name="options.category" id="opt_category" type="radio" value="blog">ブログ
            </label>
          </li>
          <li>
            <label>公開設定: 
              <input name="options.publicity" id="opt_publicity" type="radio" value="unlisted" checked>限定公開
              <input name="options.publicity" id="opt_publicity" type="radio" value="public">公開
            </label>
          </li>
          <li><label>タイトルテンプレ <input type="text" id="options.template.title"></input></label></li>
          <li><label>概要欄テンプレ <input type="text" id="options.template.about"></input></label></li>
          <li><label>タグテンプレ <input type="text" id="options.template.tag"></input></label></li>
          
        </details>
      </div>
    </from>
    <div id="ytc-buttons">
      <button id="ytc-exportButton" type="button">イクスポート</button>
      <button id="ytc-inportButton" type="button">インポート</button>
      <button id="ytc-closeButton" type="button">閉じる</button>  
    </div>
    
  `
  // キャラセレクト要素にoptionsを追加
  const charSelectElems = addElem.getElementsByClassName('ytc-char');
  const charSelectElemsArray = Array.from(charSelectElems);
  console.log(charSelectElems);
  charSelectElemsArray.forEach((elem) => {
    fighters.forEach((e) => {
      const option = document.createElement('option');
      option.value = e.option;
      option.textContent = e.name_jp;
      elem.appendChild(option);
    });
  });

  // YTCエリア
  player.parentNode.insertBefore(addElem, player.nextElementSibling);

  // idを用いたイベントリスナー
  document.getElementById('ytc-exportButton').addEventListener('click',exportData)
  document.getElementById('ytc-inportButton').addEventListener('click',importData)
  document.getElementById('ytc-closeButton').addEventListener('click',closeUI)


  // 動的に生成した要素のイベントリスナー
  // もともと存在しているytc-area-wrapperへとdelegateしてきたイベントをリスンする
  const matchList = document.getElementById('ytc-match-list');
  matchList.addEventListener('click',(event) => {
    console.log(event.target.classList[0]);
    if (event.target.classList[0] == 'ytc-markInOutButton'){
      markInOut(event.target);
    }
    else if (event.target.classList[0] == 'ytc-addItemButton'){
      addItemButton(event.target);
    }
    else if (event.target.classList[0] == 'ytc-deleteItemButton'){
      deleteItemButton(event.target);
    }
  });

}

/////////////////////////////////////////////////////////////////
// ボタンを押したときの関数
/////////////////////////////////////////////////////////////////

// イクスポートを押したときの挙動
function exportData(){
  console.log("イクスポートボタンが押されました");

  // フォームデータオブジェクトを作成
  const fd = new FormData(document.getElementById("ytc-form-area"));
  const data = Object.fromEntries(fd.entries());

  console.log(fd);
  for (let item of fd){
    console.log(item);
  }

  // const data = {
  //   name: 'kitaikuyo',
  //   url: 'http://twitter.com'
  // };
  
  const blob = new Blob([JSON.stringify(data, null, '  ')], {type: 'application\/json'});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = url;
  link.download = "export.json";
  link.click();
  URL.revokeObjectURL(url);
}

// インポートを押したときの関数
function importData(){
  console.log("インポートボタンが押されました");
}

// 閉じるを押したときの関数
function closeUI(){
  console.log("閉じるボタンが押されました");
  // メインUIを削除
  document.getElementById("ytc-area-wrapper").remove();
};

// markInOutを押したときの関数
function markInOut(elem){
  console.log("InOutボタンが押されました");
  const ytplayer = document.getElementById("movie_player");
  ytplayer.click();
  ytplayer.click();
  const currentTimeStamp = document.getElementsByClassName("ytp-time-current")[0].innerHTML;

  if (currentTimeStamp.split(":").length == 2) {
    elem.value = "0:" + currentTimeStamp;
  } else if (currentTimeStamp.split(":").length == 3) {
    elem.value = currentTimeStamp;
  } else {
    elem.value = "郁代";
  }

  return currentTimeStamp;
}

// addItemButtonsを押したときの関数
function addItemButton(elem){
  console.log("addItemButtonsボタンが押されました");
  console.log(elem);
  const ol = elem.parentNode.parentNode;
  console.log(ol);
  const addElem = document.createElement('li');
  addElem.innerHTML = `
    <input class="ytc-markInOutButton" type="text" size="3" placeholder="in"></input>
    <input class="ytc-markInOutButton" type="text" size="3" placeholder="out"></input>
    <input type="text" size="7" placeholder="p1Name"></input>
    <select class="ytc-char" style="width: 80px" placeholder="p1Char"></select>
    <input type="text" size="7" placeholder="p2Name"></input>
    <select class="ytc-char" style="width: 80px" placeholder="p2Char"></select>
    <input type="text" size="7" placeholder="round"></input>
    <button type="button" class="ytc-addItemButton">+</button>
    <button type="button" class="ytc-deleteItemButton">-</button>
  `


  

  // キャラセレクト要素にoptionsを追加
  const charSelectElems = addElem.getElementsByClassName('ytc-char');
  const charSelectElemsArray = Array.from(charSelectElems);
  console.log(charSelectElems);
  charSelectElemsArray.forEach((elem) => {
    fighters.forEach((e) => {
      const option = document.createElement('option');
      option.value = e.option;
      option.textContent = e.name_jp;
      elem.appendChild(option);
    });
  });

  // parent.appendChild(addElem)
  ol.insertBefore(addElem, elem.parentNode.nextElementSibling);

  // name属性を更新
  // ボタン追加後のリストアイテムたちに対し、name属性を付与する
  // ol(=liの配列)に対する繰り返し。それぞれのliに対し、indexを取得してからli内のそれぞれの要素のname属性を更新する。
  // liの配列を取得。
  const listItemsSource =[].slice.call(ol.childNodes);

  // liの配列に謎のテキストアイテムがまぎれているので、除去する
  const listItems = listItemsSource.filter((item) => item.tagName == 'LI')

  // liの配列に対する繰り返し
  listItems.forEach((item) =>{
    // indexの取得
    const index = listItems.indexOf(item) + 1;
    console.log(index);

    // 各要素を取得
    const innerItemsSource = [].slice.call(item.childNodes);
    const innerItems = innerItemsSource.filter((item) => item.tagName == 'INPUT' || item.tagName == 'SELECT');
    // in
    innerItems[0].setAttribute("name","match." + index.toString() + ".in");
    // out
    innerItems[0].setAttribute("name","match." + index.toString() + ".out");
    // p1Name
    innerItems[0].setAttribute("name","match." + index.toString() + ".p1Name");
    // p1Char
    innerItems[0].setAttribute("name","match." + index.toString() + ".p1Char");
    // p2Name
    innerItems[0].setAttribute("name","match." + index.toString() + ".p2Name");
    // p2Char
    innerItems[0].setAttribute("name","match." + index.toString() + ".p2Char");
    // round
    innerItems[0].setAttribute("name","match." + index.toString() + ".round");


  })
  



}

// deleteItemButtonを押したときの関数
function deleteItemButton(elem){
  console.log("deleteItemButtonボタンが押されました");
  elem.parentNode.remove();
}

/////////////////////////////////////////////////////////////////
// ユーティリティ関数
/////////////////////////////////////////////////////////////////

// キャラセレクトのクラスを持った要素にoptionsを追加する関数
function addFighterOptions(elem){
  // ごちゃってきたら作る
}