import net from 'node:net';
export function serverConfig(env=process.env){
 const mode=env.YOSOI_MODE||'local';if(!['local','public'].includes(mode))throw Error('YOSOI_MODEはlocalまたはpublicを指定してください。');
 const port=Number(env.PORT||5173);if(!Number.isInteger(port)||port<1||port>65535)throw Error('PORTが不正です。');
 let publicOrigin;
 if(mode==='public'){let u;try{u=new URL(env.PUBLIC_ORIGIN||env.RENDER_EXTERNAL_URL);}catch{throw Error('公開モードにはHTTPSの公開URLが必要です。');}if(u.protocol!=='https:'||u.username||u.password||u.port||u.pathname!=='/'||u.search||u.hash||!u.hostname.includes('.')||u.hostname==='localhost'||u.hostname.endsWith('.localhost')||u.hostname.endsWith('.local')||net.isIP(u.hostname.replace(/^\[|\]$/g,''))!==0)throw Error('公開URLはHTTPSのドメイン直下を指定してください。');publicOrigin=u.origin;}
 return {mode,port,host:mode==='public'?'0.0.0.0':'127.0.0.1',publicOrigin};
}
export function setSecurityHeaders(res,lookupBase=process.env.VITE_BOOTH_API_BASE,secure=false){let lookupOrigin='';if(lookupBase&&lookupBase!=='/api'){const u=new URL(lookupBase);if(u.protocol!=='https:'||u.username||u.password||u.search||u.hash||u.pathname!=='/')throw Error('Invalid lookup endpoint');lookupOrigin=' '+u.origin;}res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','no-referrer');res.setHeader('X-Frame-Options','DENY');res.setHeader('Permissions-Policy','camera=(), microphone=(), geolocation=(), payment=(), usb=(), bluetooth=(), serial=(), hid=()');res.setHeader('Cross-Origin-Opener-Policy','same-origin');if(secure)res.setHeader('Strict-Transport-Security','max-age=31536000');res.setHeader('Content-Security-Policy',`default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; connect-src 'self' data: blob:${lookupOrigin}; font-src 'self' data:; object-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'self'`);}

export function assertSupportedRuntime(version=process.versions.node){const [major,minor,patch]=version.split('.').map(Number);if(!((major===24&&(minor>22||minor===22&&patch>=2))||(major===26&&(minor>12||minor===12&&patch>=1))))throw Error('Node.jsを修正済みLTS版（24.22.2以上の24系、または26.12.1以上の26系）へ更新してください。');}
