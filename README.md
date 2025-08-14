<div align="center">

# Press the Mushroom

🍄 只有一個可以被瘋狂按的巨大蘑菇按鈕（以及計數 & 靜音控制）。

`Only a button and 怪`

</div>

## ✨ 特色 (Features)
- 極簡單頁：單一主按鈕 + 計數器 + 靜音/取消靜音
- 響應式：按鈕在保留標題列後儘可能填滿視窗，維持正方形
- 動畫：按壓彈跳 / 計數即時更新
- 音效：點擊可播放 (可切換靜音) – 放置 `click.mp3` 即啟用
- 無框架：原生 JS + Vite 打包
- 已配置 GitHub Pages 部署 / 可切換自訂子網域 (is-a.dev)

## 🧩 結構 (Project Structure)
```
├─ index.html          # 主頁面 (type=module script)
├─ script.js           # 邏輯：計數、按鈕動畫、音效、靜音切換
├─ styles.css          # 版面與按鈕樣式
├─ public/
│  └─ click.mp3        # (可選) 點擊音效檔
├─ vite.config.js      # Vite 設定 (base 會依是否自訂網域調整)
├─ .github/workflows/deploy.yml  # GitHub Pages 自動部署
├─ CNAME (可選)        # 自訂網域 (若使用 is-a.dev 或其他)
└─ LICENSE
```

## 🚀 使用 / 執行 (Usage)
1. 安裝依賴：`npm install`
2. 開發模式：`npm run dev`
3. 打包產出：`npm run build` → 輸出至 `dist/`
4. 本地預覽：`npm run preview`

> 音效：將你的音效檔命名為 `click.mp3` 放到 `public/` 或專案根目錄。若部署後無聲，檢查瀏覽器自動播放政策 & 檔案是否成功上傳。

## 🔊 音效 / 靜音
- 靜音按鈕會在「有聲」與「靜音」間切換文字與圖示。
- 鍵盤快捷鍵：`M` 切換靜音。

## 📦 部署 (GitHub Pages)
已設定 GitHub Actions，自動在 push 到 `main` 後：
1. `npm ci` / `npm install`
2. `npm run build`
3. Deploy `dist/` 至 Pages

### 若使用預設專案路徑 (無自訂網域)
`vite.config.js` 中 `base` 應為 `'/Press-the-mushroom/'`。

### 若使用自訂網域 (CNAME)
1. 新增 `CNAME` 檔（內容例如：`mushroom.is-a.dev`）
2. 將 `vite.config.js` 中 `base` 改為 `'/'`
3. 推送重新部署

## 🌐 申請 is-a.dev 子網域
範例 JSON（提交於 is-a-dev/register 專案）：
```json
{
	"description": "Press the Mushroom – minimal JS interaction experiment",
	"owner": {
		"username": "lin3598197",
		"email": "you@example.com"
	},
	"records": {
		"CNAME": "lin3598197.github.io"
	}
}
```
步驟摘要：
1. Fork 註冊倉庫 → 新增 `mushroom.json`（或你選的子網域）
2. 建 PR：`mushroom.is-a.dev`
3. 等合併與 DNS 生效 (幾分鐘–24h)
4. 此專案加入 `CNAME` 檔 → 調整 `base: '/'` → 推送

## 🛠️ 後續可增強 (Ideas)
- localStorage 保存累積計數
- 多音效 / 隨機音高、節奏
- 點擊粒子 / 振動 (navigator.vibrate)
- PWA (manifest + service worker 離線)
- 自動遞增彩蛋 / 里程碑提示

## 🤝 貢獻 (Contributing)
歡迎提出 Issue / PR：
- Bug 回報：描述瀏覽器、操作步驟、實際 vs 預期行為
- 功能建議：說明使用情境與價值

## 📄 授權 (License)
本專案採用 MIT 授權，詳見 `LICENSE`。

## 📝 說明 (Description for Registries)
Press the Mushroom – a tiny vanilla JS + Vite interactive button counter with sound toggle. Minimal demo for interaction + deployment pipeline.

---
若你正在設定自訂網域：記得同步調整 `vite.config.js` 與新增 `CNAME`。需要我幫你自動修改可再提出。 🍄
