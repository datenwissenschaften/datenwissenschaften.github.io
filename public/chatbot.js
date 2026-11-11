// Knotbase chat widget, loaded once the page is idle so it never competes with the first render.
window.BotConfig = {
  chatUrl: 'https://knotbase.io/api/public/chat/bot_4135b58b-15e3-4140-9311-34401ba74f7a',
}

const loadChatbot = () => {
  const script = document.createElement('script')
  script.src = 'https://knotbase.io/chatbot-widget.js'
  script.async = true
  document.head.appendChild(script)
}

if ('requestIdleCallback' in window) window.requestIdleCallback(loadChatbot, { timeout: 4000 })
else window.setTimeout(loadChatbot, 2500)
