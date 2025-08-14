const btn = document.getElementById('mushroomBtn');
const countEl = document.getElementById('count');
document.addEventListener('DOMContentLoaded',() => {
  const btn = document.getElementById('mushroomBtn');
  const countEl = document.getElementById('count');
  const soundToggle = document.getElementById('soundToggle');
  if(!btn || !countEl || !soundToggle){
    console.warn('[mushroom] 必要元素缺失', { btn: !!btn, countEl: !!countEl, soundToggle: !!soundToggle });
    return;
  }

  let count = 0;
  let soundOn = true; // true = 有聲, false = 靜音
  let clickAudio;

  function ensureAudio(){
    if(clickAudio) return;
    const candidates = ['click.mp3','/click.mp3'];
    let idx = 0;
    function tryLoad(){
      const src = candidates[idx];
      clickAudio = new Audio(src);
      clickAudio.preload = 'auto';
      clickAudio.addEventListener('canplaythrough', () => {
        // 成功載入
      }, { once:true });
      clickAudio.addEventListener('error', () => {
        console.warn('[mushroom] 音效載入失敗嘗試來源:', src);
        if(idx < candidates.length - 1){
          idx++; // 換下一個路徑
          tryLoad();
        } else {
          soundToggle.classList.add('error');
          soundToggle.title = '音效載入失敗：請確認 click.mp3 放在根目錄或 public 目錄';
        }
      }, { once:true });
    }
    tryLoad();
  }

  function updateMuteUI(){
    if(soundOn){
      soundToggle.classList.remove('is-muted');
      soundToggle.textContent = '🔊 靜音';
      soundToggle.setAttribute('aria-label','靜音（目前有聲）');
    } else {
      soundToggle.classList.add('is-muted');
      soundToggle.textContent = '🔇 取消靜音';
      soundToggle.setAttribute('aria-label','取消靜音（目前靜音）');
    }
  }
  updateMuteUI();

  function bump(){
    count++;
    countEl.textContent = count.toLocaleString();
    btn.animate([
      { transform: 'translateY(0) scale(1)' },
      { transform: 'translateY(4px) scale(.97)' },
      { transform: 'translateY(0) scale(1)' }
    ], { duration: 140, easing: 'ease-out' });
    if(soundOn){
      ensureAudio();
      if(clickAudio){
        try{ clickAudio.currentTime = 0; clickAudio.play(); }catch(e){ /* ignore */ }
      }
    }
  }

  btn.addEventListener('click', bump);
  btn.addEventListener('keydown', e => { if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); bump(); }});

  soundToggle.addEventListener('click', e => {
    e.stopPropagation(); // 防止任何祖先監聽
    e.preventDefault();
    soundOn = !soundOn;
    updateMuteUI();
  });

  // 鍵盤快捷鍵：M 切換靜音
  document.addEventListener('keydown', e => {
    if(e.key.toLowerCase() === 'm'){ soundOn = !soundOn; updateMuteUI(); }
  });
});
