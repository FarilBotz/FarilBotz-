/**
   * Create By FarilBotz. 
   * Contact Me on wa.me/6287885738763
   * Follow https://FarilBotz/FarilBotz-
*/

const _0x31fde5=_0x2c77;(function(_0x44af4e,_0x1a5337){const _0x1fe01e=_0x2c77,_0x489ec8=_0x44af4e();while(!![]){try{const _0x420b7d=-parseInt(_0x1fe01e(0x251))/0x1+parseInt(_0x1fe01e(0x22b))/0x2*(parseInt(_0x1fe01e(0x235))/0x3)+parseInt(_0x1fe01e(0x296))/0x4*(-parseInt(_0x1fe01e(0x1df))/0x5)+-parseInt(_0x1fe01e(0x1eb))/0x6*(parseInt(_0x1fe01e(0x285))/0x7)+parseInt(_0x1fe01e(0x1fe))/0x8*(parseInt(_0x1fe01e(0x272))/0x9)+parseInt(_0x1fe01e(0x1e6))/0xa*(-parseInt(_0x1fe01e(0x24f))/0xb)+parseInt(_0x1fe01e(0x28a))/0xc*(parseInt(_0x1fe01e(0x1ff))/0xd);if(_0x420b7d===_0x1a5337)break;else _0x489ec8['push'](_0x489ec8['shift']());}catch(_0x43a7ff){_0x489ec8['push'](_0x489ec8['shift']());}}}(_0x4dbc,0x20512),require('./config'));const {default:hisokaConnect,useSingleFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require('@adiwajshing/baileys'),{state,saveState}=useSingleFileAuthState('./'+sessionName+_0x31fde5(0x1e1)),pino=require(_0x31fde5(0x20f)),{Boom}=require(_0x31fde5(0x249)),fs=require('fs'),yargs=require('yargs/yargs'),chalk=require(_0x31fde5(0x269)),FileType=require('file-type'),path=require(_0x31fde5(0x24c)),_=require('lodash'),PhoneNumber=require(_0x31fde5(0x27e)),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require('./lib/exif'),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep}=require(_0x31fde5(0x278));var low;function _0x2c77(_0x2194e9,_0x18b5c){const _0x4dbcf2=_0x4dbc();return _0x2c77=function(_0x2c7786,_0x4d7f0d){_0x2c7786=_0x2c7786-0x1d4;let _0x2f7baa=_0x4dbcf2[_0x2c7786];return _0x2f7baa;},_0x2c77(_0x2194e9,_0x18b5c);}try{low=require(_0x31fde5(0x23b));}catch(_0x2c66db){low=require(_0x31fde5(0x1dc));}const {Low,JSONFile}=low,mongoDB=require(_0x31fde5(0x293));global[_0x31fde5(0x1e3)]=(_0x56c5c1,_0x1a93d2='/',_0x5e79b6={},_0x1204b7)=>(_0x56c5c1 in global['APIs']?global[_0x31fde5(0x209)][_0x56c5c1]:_0x56c5c1)+_0x1a93d2+(_0x5e79b6||_0x1204b7?'?'+new URLSearchParams(Object[_0x31fde5(0x20a)]({..._0x5e79b6,..._0x1204b7?{[_0x1204b7]:global['APIKeys'][_0x56c5c1 in global[_0x31fde5(0x209)]?global[_0x31fde5(0x209)][_0x56c5c1]:_0x56c5c1]}:{}})):'');const store=makeInMemoryStore({'logger':pino()[_0x31fde5(0x203)]({'level':'silent','stream':_0x31fde5(0x224)})});global['opts']=new Object(yargs(process[_0x31fde5(0x1f1)]['slice'](0x2))[_0x31fde5(0x255)](![])[_0x31fde5(0x291)]()),global['db']=new Low(/https?:\/\//[_0x31fde5(0x256)](opts['db']||'')?new cloudDBAdapter(opts['db']):/mongodb/[_0x31fde5(0x256)](opts['db'])?new mongoDB(opts['db']):new JSONFile(_0x31fde5(0x1e9))),global[_0x31fde5(0x205)]=global['db'],global['loadDatabase']=async function loadDatabase(){const _0x19fbaa=_0x31fde5;if(global['db'][_0x19fbaa(0x1e4)])return new Promise(_0x2be053=>setInterval(function(){const _0xfc5b36=_0x19fbaa;!global['db'][_0xfc5b36(0x1e4)]?(clearInterval(this),_0x2be053(global['db'][_0xfc5b36(0x268)]==null?global[_0xfc5b36(0x26f)]():global['db'][_0xfc5b36(0x268)])):null;},0x1*0x3e8));if(global['db'][_0x19fbaa(0x268)]!==null)return;global['db'][_0x19fbaa(0x1e4)]=!![],await global['db']['read'](),global['db'][_0x19fbaa(0x1e4)]=![],global['db']['data']={'users':{},'chats':{},'database':{},'game':{},'settings':{},'others':{},'sticker':{},...global['db'][_0x19fbaa(0x268)]||{}},global['db'][_0x19fbaa(0x254)]=_[_0x19fbaa(0x254)](global['db'][_0x19fbaa(0x268)]);},loadDatabase();if(global['db'])setInterval(async()=>{const _0x131f2=_0x31fde5;if(global['db']['data'])await global['db'][_0x131f2(0x25d)]();},0x1e*0x3e8);function _0x4dbc(){const _0x1e2918=['exitProcess','test','international','author','waUploadToServer','cache','sendMessage','keys','write','Connection\x20Lost\x20from\x20Server,\x20reconnecting...','server','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','msg','Zee\x20Multi\x20Device','promises','WhatsApp','readViewOnce','ext','mimetype','data','chalk','existsSync','packname','categories','imageMessage','setStatus','loadDatabase','WebMessageInfo','sendVideo','9iSSOZf','「\x20Group\x20Settings\x20Change\x20」\x0a\x0aInfo\x20group\x20telah\x20dibatasi,\x20Sekarang\x20hanya\x20admin\x20yang\x20dapat\x20mengedit\x20info\x20group\x20!','Connection\x20closed,\x20reconnecting....','remoteJid','key','alloc','./lib/myfunc','toString','end','BEGIN:VCARD\x0aVERSION:3.0\x0aN:','video','participant','awesome-phonenumber','downloadAndSaveMediaMessage','call-creator','badSession','isBuffer','Connected...','profilePictureUrl','63098pVmxBR','chat','decodeJid','announce','from','603000yDkmuf','\x20Kontak','「\x20Group\x20Settings\x20Change\x20」\x0a\x0aGroup\x20telah\x20dibuka\x20oleh\x20admin,\x20Sekarang\x20peserta\x20dapat\x20mengirim\x20pesan\x20!','silent','caption','asSticker','add','parse','cMod','./lib/mongoDB','close','json','49304IstXOj','watchFile','attrs','restrict','\x0aitem1.TEL;waid=','restartRequired','status@broadcast','viewOnce','application/octet-stream','ephemeralMessage','unwatchFile','output','logout','group-participants.update','./lib/lowdb','string','sendImage','10XoWaez','matchAll','.json','@broadcast','api','READ','loggedOut','404890eoLDpP','participants','message','src/database.json','fromBuffer','78ObXgjg','\x0aFN:','contextInfo','map','mtype','subject','argv','notify','block','connectionReplaced','sticker','getFile','sendImageAsSticker','.bin','@s.whatsapp.net','fromObject','\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD','conversation','Group\x20Settings\x20Change\x20Message','89968TlHaOZ','91Eamsyy','viewOnceMessage','user','creds.update','child','redBright','DATABASE','text','connectionClosed','1.0.0','APIs','entries','getNumber','fromMe','contacts','image','pino','type','CB:call','connectionLost','downloadMediaMessage','join','includes','asDocument','relayMessage','resolve','push','Sistem\x20otomatis\x20block!\x0aJangan\x20menelpon\x20bot!\x0aSilahkan\x20Hubungi\x20Owner\x20Untuk\x20Dibuka\x20!','groups.update','https://shortlink.hisokaarridho.my.id/rg1oT','Restart\x20Required,\x20Restarting...','messages.upsert','content','error','status','sendText','writeFile','store','getName','split','public','Connection\x20TimedOut,\x20Reconnecting...','Unknown\x20DisconnectReason:\x20','owner','2zZxjZX','log','replace','Safari','./hisoka','sendContact','./lib/exif','connection.update','verifiedName','readFileSync','553497MbVfFJ','bind','messages','tag','Message','Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.','lowdb','statusCode','length','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','groupMetadata','send5ButImg','image/webp','serializeM','../src/','base64','Update\x20','offer','Welcome\x20To\x20','document','@hapi/boom','startsWith','ignore','path','0@s.whatsapp.net','name','33nbrFzO','copyNForward','151824eHkQno','audio','sendVideoAsSticker','chain'];_0x4dbc=function(){return _0x1e2918;};return _0x4dbc();}async function startHisoka(){const _0xa83e09=_0x31fde5,_0x3f858a=hisokaConnect({'logger':pino({'level':_0xa83e09(0x28d)}),'printQRInTerminal':!![],'browser':[_0xa83e09(0x262),_0xa83e09(0x22e),_0xa83e09(0x208)],'auth':state});return store[_0xa83e09(0x236)](_0x3f858a['ev']),_0x3f858a['ws']['on'](_0xa83e09(0x211),async _0x19a010=>{const _0x53439e=_0xa83e09,_0x406894=_0x19a010[_0x53439e(0x21f)][0x0][_0x53439e(0x298)][_0x53439e(0x280)];if(_0x19a010[_0x53439e(0x21f)][0x0][_0x53439e(0x238)]==_0x53439e(0x246)){let _0x396e6b=await _0x3f858a[_0x53439e(0x230)](_0x406894,global[_0x53439e(0x22a)]);_0x3f858a[_0x53439e(0x25b)](_0x406894,{'text':_0x53439e(0x21a)},{'quoted':_0x396e6b}),await sleep(0x1f40),await _0x3f858a['updateBlockStatus'](_0x406894,_0x53439e(0x1f3));}}),_0x3f858a['ev']['on'](_0xa83e09(0x21e),async _0x557370=>{const _0x2af88b=_0xa83e09;try{mek=_0x557370[_0x2af88b(0x237)][0x0];if(!mek[_0x2af88b(0x1e8)])return;mek['message']=Object[_0x2af88b(0x25c)](mek[_0x2af88b(0x1e8)])[0x0]===_0x2af88b(0x1d7)?mek['message'][_0x2af88b(0x1d7)][_0x2af88b(0x1e8)]:mek['message'];if(mek[_0x2af88b(0x276)]&&mek[_0x2af88b(0x276)][_0x2af88b(0x275)]===_0x2af88b(0x1d4))return;if(!_0x3f858a[_0x2af88b(0x227)]&&!mek['key']['fromMe']&&_0x557370[_0x2af88b(0x210)]===_0x2af88b(0x1f2))return;if(mek['key']['id'][_0x2af88b(0x24a)]('BAE5')&&mek[_0x2af88b(0x276)]['id'][_0x2af88b(0x23d)]===0x10)return;m=smsg(_0x3f858a,mek,store),require(_0x2af88b(0x22f))(_0x3f858a,m,_0x557370,store);}catch(_0x488c61){console[_0x2af88b(0x22c)](_0x488c61);}}),_0x3f858a['ev']['on'](_0xa83e09(0x21b),async _0xaba2eb=>{const _0x36766c=_0xa83e09;try{ppgc=await _0x3f858a[_0x36766c(0x284)](_0xaba2eb[0x0]['id'],_0x36766c(0x20e));}catch{ppgc=_0x36766c(0x21c);}let _0x535e4d={'url':ppgc};if(_0xaba2eb[0x0]['announce']==!![])_0x3f858a[_0x36766c(0x240)](_0xaba2eb[0x0]['id'],'「\x20Group\x20Settings\x20Change\x20」\x0a\x0aGroup\x20telah\x20ditutup\x20oleh\x20admin,\x20Sekarang\x20hanya\x20admin\x20yang\x20dapat\x20mengirim\x20pesan\x20!',_0x36766c(0x1fd),_0x535e4d,[]);else{if(_0xaba2eb[0x0][_0x36766c(0x288)]==![])_0x3f858a[_0x36766c(0x240)](_0xaba2eb[0x0]['id'],_0x36766c(0x28c),_0x36766c(0x1fd),_0x535e4d,[]);else{if(_0xaba2eb[0x0][_0x36766c(0x299)]==!![])_0x3f858a[_0x36766c(0x240)](_0xaba2eb[0x0]['id'],_0x36766c(0x273),_0x36766c(0x1fd),_0x535e4d,[]);else _0xaba2eb[0x0][_0x36766c(0x299)]==![]?_0x3f858a['send5ButImg'](_0xaba2eb[0x0]['id'],'「\x20Group\x20Settings\x20Change\x20」\x0a\x0aInfo\x20group\x20telah\x20dibuka,\x20Sekarang\x20peserta\x20dapat\x20mengedit\x20info\x20group\x20!',_0x36766c(0x1fd),_0x535e4d,[]):_0x3f858a[_0x36766c(0x240)](_0xaba2eb[0x0]['id'],'「\x20Group\x20Settings\x20Change\x20」\x0a\x0aGroup\x20Subject\x20telah\x20diganti\x20menjadi\x20*'+_0xaba2eb[0x0]['subject']+'*',_0x36766c(0x1fd),_0x535e4d,[]);}}}),_0x3f858a['ev']['on'](_0xa83e09(0x1db),async _0x88a1f2=>{const _0x4bcc81=_0xa83e09;console['log'](_0x88a1f2);try{let _0x1cdeea=await _0x3f858a[_0x4bcc81(0x23f)](_0x88a1f2['id']),_0x185d9e=_0x88a1f2[_0x4bcc81(0x1e7)];for(let _0x122d2d of _0x185d9e){try{ppuser=await _0x3f858a['profilePictureUrl'](_0x122d2d,_0x4bcc81(0x20e));}catch{ppuser=_0x4bcc81(0x23e);}try{ppgroup=await _0x3f858a['profilePictureUrl'](_0x88a1f2['id'],_0x4bcc81(0x20e));}catch{ppgroup=_0x4bcc81(0x23e);}if(_0x88a1f2['action']==_0x4bcc81(0x290))_0x3f858a[_0x4bcc81(0x25b)](_0x88a1f2['id'],{'image':{'url':ppuser},'contextInfo':{'mentionedJid':[_0x122d2d]},'caption':_0x4bcc81(0x247)+_0x1cdeea[_0x4bcc81(0x1f0)]+'\x20@'+_0x122d2d['split']('@')[0x0]});else _0x88a1f2['action']=='remove'&&_0x3f858a[_0x4bcc81(0x25b)](_0x88a1f2['id'],{'image':{'url':ppuser},'contextInfo':{'mentionedJid':[_0x122d2d]},'caption':'@'+_0x122d2d['split']('@')[0x0]+'\x20Keluar\x20Dari\x20Grup\x20'+_0x1cdeea[_0x4bcc81(0x1f0)]});}}catch(_0x72bc02){console[_0x4bcc81(0x22c)](_0x72bc02);}}),_0x3f858a[_0xa83e09(0x287)]=_0x1ea717=>{const _0x4d1217=_0xa83e09;if(!_0x1ea717)return _0x1ea717;if(/:\d+@/gi[_0x4d1217(0x256)](_0x1ea717)){let _0x355bc6=jidDecode(_0x1ea717)||{};return _0x355bc6[_0x4d1217(0x201)]&&_0x355bc6[_0x4d1217(0x25f)]&&_0x355bc6[_0x4d1217(0x201)]+'@'+_0x355bc6[_0x4d1217(0x25f)]||_0x1ea717;}else return _0x1ea717;},_0x3f858a['ev']['on']('contacts.update',_0x1036ae=>{const _0x2f7505=_0xa83e09;for(let _0x226d6d of _0x1036ae){let _0x4c1225=_0x3f858a[_0x2f7505(0x287)](_0x226d6d['id']);if(store&&store[_0x2f7505(0x20d)])store[_0x2f7505(0x20d)][_0x4c1225]={'id':_0x4c1225,'name':_0x226d6d['notify']};}}),_0x3f858a[_0xa83e09(0x225)]=(_0x5d3fed,_0x53d907=![])=>{const _0x1e6a0d=_0xa83e09;id=_0x3f858a[_0x1e6a0d(0x287)](_0x5d3fed),_0x53d907=_0x3f858a['withoutContact']||_0x53d907;let _0x1e846b;if(id['endsWith']('@g.us'))return new Promise(async _0x559864=>{const _0x26677a=_0x1e6a0d;_0x1e846b=store[_0x26677a(0x20d)][id]||{};if(!(_0x1e846b[_0x26677a(0x24e)]||_0x1e846b[_0x26677a(0x1f0)]))_0x1e846b=_0x3f858a[_0x26677a(0x23f)](id)||{};_0x559864(_0x1e846b['name']||_0x1e846b[_0x26677a(0x1f0)]||PhoneNumber('+'+id[_0x26677a(0x22d)]('@s.whatsapp.net',''))[_0x26677a(0x20b)](_0x26677a(0x257)));});else _0x1e846b=id===_0x1e6a0d(0x24d)?{'id':id,'name':_0x1e6a0d(0x264)}:id===_0x3f858a[_0x1e6a0d(0x287)](_0x3f858a['user']['id'])?_0x3f858a[_0x1e6a0d(0x201)]:store[_0x1e6a0d(0x20d)][id]||{};return(_0x53d907?'':_0x1e846b[_0x1e6a0d(0x24e)])||_0x1e846b[_0x1e6a0d(0x1f0)]||_0x1e846b[_0x1e6a0d(0x233)]||PhoneNumber('+'+_0x5d3fed[_0x1e6a0d(0x22d)](_0x1e6a0d(0x1f9),''))[_0x1e6a0d(0x20b)]('international');},_0x3f858a[_0xa83e09(0x230)]=async(_0x553a68,_0x39e98f,_0x4dbd76='',_0x15f837={})=>{const _0x16bd17=_0xa83e09;let _0x21fd31=[];for(let _0x5da48c of _0x39e98f){_0x21fd31[_0x16bd17(0x219)]({'displayName':await _0x3f858a[_0x16bd17(0x225)](_0x5da48c+_0x16bd17(0x1f9)),'vcard':_0x16bd17(0x27b)+await _0x3f858a[_0x16bd17(0x225)](_0x5da48c+'@s.whatsapp.net')+_0x16bd17(0x1ec)+await _0x3f858a[_0x16bd17(0x225)](_0x5da48c+_0x16bd17(0x1f9))+_0x16bd17(0x29a)+_0x5da48c+':'+_0x5da48c+_0x16bd17(0x1fb)});}_0x3f858a['sendMessage'](_0x553a68,{'contacts':{'displayName':_0x21fd31[_0x16bd17(0x23d)]+_0x16bd17(0x28b),'contacts':_0x21fd31},..._0x15f837},{'quoted':_0x4dbd76});},_0x3f858a[_0xa83e09(0x26e)]=_0x5e9b4b=>{const _0x810a34=_0xa83e09;return _0x3f858a['query']({'tag':'iq','attrs':{'to':_0x810a34(0x1f9),'type':'set','xmlns':'status'},'content':[{'tag':_0x810a34(0x221),'attrs':{},'content':Buffer[_0x810a34(0x289)](_0x5e9b4b,'utf-8')}]}),_0x5e9b4b;},_0x3f858a[_0xa83e09(0x227)]=!![],_0x3f858a[_0xa83e09(0x242)]=_0x4d0fa9=>smsg(_0x3f858a,_0x4d0fa9,store),_0x3f858a['ev']['on'](_0xa83e09(0x232),async _0x2e3091=>{const _0x1ec169=_0xa83e09,{connection:_0x570f56,lastDisconnect:_0x48cab9}=_0x2e3091;if(_0x570f56===_0x1ec169(0x294)){let _0x342d4a=new Boom(_0x48cab9?.[_0x1ec169(0x220)])?.[_0x1ec169(0x1d9)][_0x1ec169(0x23c)];if(_0x342d4a===DisconnectReason[_0x1ec169(0x281)])console[_0x1ec169(0x22c)](_0x1ec169(0x260)),_0x3f858a['logout']();else{if(_0x342d4a===DisconnectReason[_0x1ec169(0x207)])console[_0x1ec169(0x22c)](_0x1ec169(0x274)),startHisoka();else{if(_0x342d4a===DisconnectReason[_0x1ec169(0x212)])console[_0x1ec169(0x22c)](_0x1ec169(0x25e)),startHisoka();else{if(_0x342d4a===DisconnectReason[_0x1ec169(0x1f4)])console[_0x1ec169(0x22c)]('Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First'),_0x3f858a[_0x1ec169(0x1da)]();else{if(_0x342d4a===DisconnectReason[_0x1ec169(0x1e5)])console[_0x1ec169(0x22c)](_0x1ec169(0x23a)),_0x3f858a['logout']();else{if(_0x342d4a===DisconnectReason[_0x1ec169(0x29b)])console[_0x1ec169(0x22c)](_0x1ec169(0x21d)),startHisoka();else{if(_0x342d4a===DisconnectReason['timedOut'])console[_0x1ec169(0x22c)](_0x1ec169(0x228)),startHisoka();else _0x3f858a[_0x1ec169(0x27a)](_0x1ec169(0x229)+_0x342d4a+'|'+_0x570f56);}}}}}}}console[_0x1ec169(0x22c)](_0x1ec169(0x283),_0x2e3091);}),_0x3f858a['ev']['on'](_0xa83e09(0x202),saveState),_0x3f858a[_0xa83e09(0x240)]=async(_0x3132d2,_0x175d00='',_0x439c61='',_0x2dc28c,_0x188be9=[],_0x561620={})=>{const _0x4d8aa6=_0xa83e09;let _0x2143f7=await prepareWAMessageMedia({'image':_0x2dc28c},{'upload':_0x3f858a[_0x4d8aa6(0x259)]});var _0x16d04b=generateWAMessageFromContent(m[_0x4d8aa6(0x286)],proto[_0x4d8aa6(0x239)][_0x4d8aa6(0x1fa)]({'templateMessage':{'hydratedTemplate':{'imageMessage':_0x2143f7[_0x4d8aa6(0x26d)],'hydratedContentText':_0x175d00,'hydratedFooterText':_0x439c61,'hydratedButtons':_0x188be9}}}),_0x561620);_0x3f858a[_0x4d8aa6(0x217)](_0x3132d2,_0x16d04b['message'],{'messageId':_0x16d04b['key']['id']});},_0x3f858a['sendButtonText']=(_0x148b5c,_0x4c7797=[],_0x140e64,_0x1b78de,_0x13d38e='',_0x5d644e={})=>{const _0x82f8ac=_0xa83e09;let _0xe183d6={'text':_0x140e64,'footer':_0x1b78de,'buttons':_0x4c7797,'headerType':0x2,..._0x5d644e};_0x3f858a[_0x82f8ac(0x25b)](_0x148b5c,_0xe183d6,{'quoted':_0x13d38e,..._0x5d644e});},_0x3f858a[_0xa83e09(0x222)]=(_0x506dd7,_0x5006da,_0x14b9d7='',_0x709296)=>_0x3f858a[_0xa83e09(0x25b)](_0x506dd7,{'text':_0x5006da,..._0x709296},{'quoted':_0x14b9d7}),_0x3f858a[_0xa83e09(0x1de)]=async(_0xe8443c,_0x53167e,_0x57c818='',_0x15db1a='',_0x5858b5)=>{const _0xdc07d3=_0xa83e09;let _0x5a2b4c=Buffer['isBuffer'](_0x53167e)?_0x53167e:/^data:.*?\/.*?;base64,/i[_0xdc07d3(0x256)](_0x53167e)?Buffer[_0xdc07d3(0x289)](_0x53167e[_0xdc07d3(0x226)]`,`[0x1],'base64'):/^https?:\/\//[_0xdc07d3(0x256)](_0x53167e)?await await getBuffer(_0x53167e):fs[_0xdc07d3(0x26a)](_0x53167e)?fs['readFileSync'](_0x53167e):Buffer[_0xdc07d3(0x277)](0x0);return await _0x3f858a[_0xdc07d3(0x25b)](_0xe8443c,{'image':_0x5a2b4c,'caption':_0x57c818,..._0x5858b5},{'quoted':_0x15db1a});},_0x3f858a[_0xa83e09(0x271)]=async(_0x9215a1,_0x5beb1c,_0x12dc1c='',_0x16681b='',_0x130dea=![],_0x47112f)=>{const _0x1c0944=_0xa83e09;let _0x61944d=Buffer[_0x1c0944(0x282)](_0x5beb1c)?_0x5beb1c:/^data:.*?\/.*?;base64,/i[_0x1c0944(0x256)](_0x5beb1c)?Buffer[_0x1c0944(0x289)](_0x5beb1c['split']`,`[0x1],_0x1c0944(0x244)):/^https?:\/\//[_0x1c0944(0x256)](_0x5beb1c)?await await getBuffer(_0x5beb1c):fs['existsSync'](_0x5beb1c)?fs[_0x1c0944(0x234)](_0x5beb1c):Buffer[_0x1c0944(0x277)](0x0);return await _0x3f858a[_0x1c0944(0x25b)](_0x9215a1,{'video':_0x61944d,'caption':_0x12dc1c,'gifPlayback':_0x130dea,..._0x47112f},{'quoted':_0x16681b});},_0x3f858a['sendAudio']=async(_0x51d419,_0x1b9922,_0x144eed='',_0x1ab873=![],_0x3cce28)=>{const _0x2d97e6=_0xa83e09;let _0x59c313=Buffer['isBuffer'](_0x1b9922)?_0x1b9922:/^data:.*?\/.*?;base64,/i[_0x2d97e6(0x256)](_0x1b9922)?Buffer[_0x2d97e6(0x289)](_0x1b9922[_0x2d97e6(0x226)]`,`[0x1],'base64'):/^https?:\/\//['test'](_0x1b9922)?await await getBuffer(_0x1b9922):fs['existsSync'](_0x1b9922)?fs[_0x2d97e6(0x234)](_0x1b9922):Buffer[_0x2d97e6(0x277)](0x0);return await _0x3f858a[_0x2d97e6(0x25b)](_0x51d419,{'audio':_0x59c313,'ptt':_0x1ab873,..._0x3cce28},{'quoted':_0x144eed});},_0x3f858a['sendTextWithMentions']=async(_0x4b23d5,_0xbd4dff,_0x2af12c,_0x4d2df7={})=>_0x3f858a[_0xa83e09(0x25b)](_0x4b23d5,{'text':_0xbd4dff,'contextInfo':{'mentionedJid':[..._0xbd4dff[_0xa83e09(0x1e0)](/@(\d{0,16})/g)][_0xa83e09(0x1ee)](_0x23894e=>_0x23894e[0x1]+_0xa83e09(0x1f9))},..._0x4d2df7},{'quoted':_0x2af12c}),_0x3f858a[_0xa83e09(0x1f7)]=async(_0x477fa4,_0x883ec,_0xddbf8d,_0x19fddb={})=>{const _0x39ec57=_0xa83e09;let _0x5de81e=Buffer[_0x39ec57(0x282)](_0x883ec)?_0x883ec:/^data:.*?\/.*?;base64,/i['test'](_0x883ec)?Buffer[_0x39ec57(0x289)](_0x883ec[_0x39ec57(0x226)]`,`[0x1],_0x39ec57(0x244)):/^https?:\/\//[_0x39ec57(0x256)](_0x883ec)?await await getBuffer(_0x883ec):fs[_0x39ec57(0x26a)](_0x883ec)?fs[_0x39ec57(0x234)](_0x883ec):Buffer[_0x39ec57(0x277)](0x0),_0x59c1b0;return _0x19fddb&&(_0x19fddb[_0x39ec57(0x26b)]||_0x19fddb[_0x39ec57(0x258)])?_0x59c1b0=await writeExifImg(_0x5de81e,_0x19fddb):_0x59c1b0=await imageToWebp(_0x5de81e),await _0x3f858a[_0x39ec57(0x25b)](_0x477fa4,{'sticker':{'url':_0x59c1b0},..._0x19fddb},{'quoted':_0xddbf8d}),_0x59c1b0;},_0x3f858a[_0xa83e09(0x253)]=async(_0x46180c,_0x2afcb7,_0x2283c0,_0x349828={})=>{const _0x5e38f7=_0xa83e09;let _0x179f1a=Buffer[_0x5e38f7(0x282)](_0x2afcb7)?_0x2afcb7:/^data:.*?\/.*?;base64,/i[_0x5e38f7(0x256)](_0x2afcb7)?Buffer['from'](_0x2afcb7[_0x5e38f7(0x226)]`,`[0x1],_0x5e38f7(0x244)):/^https?:\/\//['test'](_0x2afcb7)?await await getBuffer(_0x2afcb7):fs[_0x5e38f7(0x26a)](_0x2afcb7)?fs[_0x5e38f7(0x234)](_0x2afcb7):Buffer[_0x5e38f7(0x277)](0x0),_0x3d2584;return _0x349828&&(_0x349828[_0x5e38f7(0x26b)]||_0x349828[_0x5e38f7(0x258)])?_0x3d2584=await writeExifVid(_0x179f1a,_0x349828):_0x3d2584=await videoToWebp(_0x179f1a),await _0x3f858a[_0x5e38f7(0x25b)](_0x46180c,{'sticker':{'url':_0x3d2584},..._0x349828},{'quoted':_0x2283c0}),_0x3d2584;},_0x3f858a[_0xa83e09(0x27f)]=async(_0xaa50aa,_0x437342,_0x4c03bc=!![])=>{const _0xb5d756=_0xa83e09;let _0x76e699=_0xaa50aa['msg']?_0xaa50aa[_0xb5d756(0x261)]:_0xaa50aa,_0x464f68=(_0xaa50aa[_0xb5d756(0x261)]||_0xaa50aa)['mimetype']||'',_0x226a93=_0xaa50aa[_0xb5d756(0x1ef)]?_0xaa50aa[_0xb5d756(0x1ef)][_0xb5d756(0x22d)](/Message/gi,''):_0x464f68[_0xb5d756(0x226)]('/')[0x0];const _0x2a25c1=await downloadContentFromMessage(_0x76e699,_0x226a93);let _0xafd10f=Buffer[_0xb5d756(0x289)]([]);for await(const _0x418e7f of _0x2a25c1){_0xafd10f=Buffer['concat']([_0xafd10f,_0x418e7f]);}let _0x3484d8=await FileType['fromBuffer'](_0xafd10f);return trueFileName=_0x4c03bc?_0x437342+'.'+_0x3484d8[_0xb5d756(0x266)]:_0x437342,await fs['writeFileSync'](trueFileName,_0xafd10f),trueFileName;},_0x3f858a[_0xa83e09(0x213)]=async _0xde8151=>{const _0x360d0e=_0xa83e09;let _0x4b5bae=(_0xde8151[_0x360d0e(0x261)]||_0xde8151)[_0x360d0e(0x267)]||'',_0x4be950=_0xde8151[_0x360d0e(0x1ef)]?_0xde8151[_0x360d0e(0x1ef)][_0x360d0e(0x22d)](/Message/gi,''):_0x4b5bae[_0x360d0e(0x226)]('/')[0x0];const _0x750100=await downloadContentFromMessage(_0xde8151,_0x4be950);let _0x5b9c08=Buffer[_0x360d0e(0x289)]([]);for await(const _0x1bf0d9 of _0x750100){_0x5b9c08=Buffer['concat']([_0x5b9c08,_0x1bf0d9]);}return _0x5b9c08;},_0x3f858a['sendMedia']=async(_0x23c8cb,_0x42b41d,_0x46af21='',_0x125cef='',_0x7953d7='',_0x107898={})=>{const _0x3984b3=_0xa83e09;let _0x2dc351=await _0x3f858a['getFile'](_0x42b41d,!![]),{mime:_0x42094d,ext:_0x464072,res:_0x374e0d,data:_0x35a771,filename:_0x512832}=_0x2dc351;if(_0x374e0d&&_0x374e0d[_0x3984b3(0x221)]!==0xc8||file[_0x3984b3(0x23d)]<=0x10000)try{throw{'json':JSON[_0x3984b3(0x291)](file[_0x3984b3(0x279)]())};}catch(_0x25c24c){if(_0x25c24c['json'])throw _0x25c24c[_0x3984b3(0x295)];}let _0x5da499='',_0x4bc5b9=_0x42094d,_0x285e03=_0x512832;if(_0x107898[_0x3984b3(0x216)])_0x5da499=_0x3984b3(0x248);if(_0x107898[_0x3984b3(0x28f)]||/webp/[_0x3984b3(0x256)](_0x42094d)){let {writeExif:_0x29e83c}=require(_0x3984b3(0x231)),_0x8fe7ea={'mimetype':_0x42094d,'data':_0x35a771};_0x285e03=await _0x29e83c(_0x8fe7ea,{'packname':_0x107898[_0x3984b3(0x26b)]?_0x107898[_0x3984b3(0x26b)]:global[_0x3984b3(0x26b)],'author':_0x107898[_0x3984b3(0x258)]?_0x107898[_0x3984b3(0x258)]:global[_0x3984b3(0x258)],'categories':_0x107898[_0x3984b3(0x26c)]?_0x107898['categories']:[]}),await fs[_0x3984b3(0x263)]['unlink'](_0x512832),_0x5da499=_0x3984b3(0x1f5),_0x4bc5b9=_0x3984b3(0x241);}else{if(/image/[_0x3984b3(0x256)](_0x42094d))_0x5da499=_0x3984b3(0x20e);else{if(/video/[_0x3984b3(0x256)](_0x42094d))_0x5da499=_0x3984b3(0x27c);else{if(/audio/[_0x3984b3(0x256)](_0x42094d))_0x5da499=_0x3984b3(0x252);else _0x5da499=_0x3984b3(0x248);}}}return await _0x3f858a[_0x3984b3(0x25b)](_0x23c8cb,{[_0x5da499]:{'url':_0x285e03},'caption':_0x125cef,'mimetype':_0x4bc5b9,'fileName':_0x46af21,..._0x107898},{'quoted':_0x7953d7,..._0x107898}),fs['promises']['unlink'](_0x285e03);},_0x3f858a[_0xa83e09(0x250)]=async(_0x35521c,_0x305006,_0x258c30=![],_0x8c9bd5={})=>{const _0x5bc448=_0xa83e09;let _0x48c543;_0x8c9bd5[_0x5bc448(0x265)]&&(_0x305006['message']=_0x305006['message']&&_0x305006[_0x5bc448(0x1e8)][_0x5bc448(0x1d7)]&&_0x305006[_0x5bc448(0x1e8)][_0x5bc448(0x1d7)][_0x5bc448(0x1e8)]?_0x305006['message'][_0x5bc448(0x1d7)][_0x5bc448(0x1e8)]:_0x305006[_0x5bc448(0x1e8)]||undefined,_0x48c543=Object[_0x5bc448(0x25c)](_0x305006[_0x5bc448(0x1e8)][_0x5bc448(0x200)][_0x5bc448(0x1e8)])[0x0],delete(_0x305006['message']&&_0x305006['message']['ignore']?_0x305006['message'][_0x5bc448(0x24b)]:_0x305006[_0x5bc448(0x1e8)]||undefined),delete _0x305006[_0x5bc448(0x1e8)][_0x5bc448(0x200)][_0x5bc448(0x1e8)][_0x48c543][_0x5bc448(0x1d5)],_0x305006['message']={..._0x305006[_0x5bc448(0x1e8)][_0x5bc448(0x200)][_0x5bc448(0x1e8)]});let _0x64fbaa=Object[_0x5bc448(0x25c)](_0x305006[_0x5bc448(0x1e8)])[0x0],_0x56ca43=await generateForwardMessageContent(_0x305006,_0x258c30),_0x533030=Object[_0x5bc448(0x25c)](_0x56ca43)[0x0],_0x196fef={};if(_0x64fbaa!=_0x5bc448(0x1fc))_0x196fef=_0x305006['message'][_0x64fbaa][_0x5bc448(0x1ed)];_0x56ca43[_0x533030][_0x5bc448(0x1ed)]={..._0x196fef,..._0x56ca43[_0x533030][_0x5bc448(0x1ed)]};const _0x35423f=await generateWAMessageFromContent(_0x35521c,_0x56ca43,_0x8c9bd5?{..._0x56ca43[_0x533030],..._0x8c9bd5,..._0x8c9bd5[_0x5bc448(0x1ed)]?{'contextInfo':{..._0x56ca43[_0x533030][_0x5bc448(0x1ed)],..._0x8c9bd5[_0x5bc448(0x1ed)]}}:{}}:{});return await _0x3f858a[_0x5bc448(0x217)](_0x35521c,_0x35423f['message'],{'messageId':_0x35423f['key']['id']}),_0x35423f;},_0x3f858a[_0xa83e09(0x292)]=(_0x53b989,_0x3a1290,_0xae3e4c='',_0x3429cf=_0x3f858a[_0xa83e09(0x201)]['id'],_0x26dbcf={})=>{const _0x34999a=_0xa83e09;let _0x3e9683=Object[_0x34999a(0x25c)](_0x3a1290[_0x34999a(0x1e8)])[0x0],_0x328406=_0x3e9683===_0x34999a(0x1d7);_0x328406&&(_0x3e9683=Object[_0x34999a(0x25c)](_0x3a1290['message']['ephemeralMessage'][_0x34999a(0x1e8)])[0x0]);let _0x485043=_0x328406?_0x3a1290['message'][_0x34999a(0x1d7)][_0x34999a(0x1e8)]:_0x3a1290['message'],_0x424038=_0x485043[_0x3e9683];if(typeof _0x424038==='string')_0x485043[_0x3e9683]=_0xae3e4c||_0x424038;else{if(_0x424038['caption'])_0x424038[_0x34999a(0x28e)]=_0xae3e4c||_0x424038['caption'];else{if(_0x424038[_0x34999a(0x206)])_0x424038[_0x34999a(0x206)]=_0xae3e4c||_0x424038[_0x34999a(0x206)];}}if(typeof _0x424038!==_0x34999a(0x1dd))_0x485043[_0x3e9683]={..._0x424038,..._0x26dbcf};if(_0x3a1290[_0x34999a(0x276)][_0x34999a(0x27d)])_0x3429cf=_0x3a1290['key']['participant']=_0x3429cf||_0x3a1290[_0x34999a(0x276)][_0x34999a(0x27d)];else{if(_0x3a1290[_0x34999a(0x276)]['participant'])_0x3429cf=_0x3a1290['key'][_0x34999a(0x27d)]=_0x3429cf||_0x3a1290[_0x34999a(0x276)][_0x34999a(0x27d)];}if(_0x3a1290[_0x34999a(0x276)][_0x34999a(0x275)][_0x34999a(0x215)](_0x34999a(0x1f9)))_0x3429cf=_0x3429cf||_0x3a1290[_0x34999a(0x276)][_0x34999a(0x275)];else{if(_0x3a1290['key'][_0x34999a(0x275)][_0x34999a(0x215)](_0x34999a(0x1e2)))_0x3429cf=_0x3429cf||_0x3a1290[_0x34999a(0x276)]['remoteJid'];}return _0x3a1290[_0x34999a(0x276)][_0x34999a(0x275)]=_0x53b989,_0x3a1290[_0x34999a(0x276)][_0x34999a(0x20c)]=_0x3429cf===_0x3f858a[_0x34999a(0x201)]['id'],proto[_0x34999a(0x270)][_0x34999a(0x1fa)](_0x3a1290);},_0x3f858a[_0xa83e09(0x1f6)]=async(_0x239083,_0x3065e6)=>{const _0x3391c2=_0xa83e09;let _0x39fe52,_0x52238d=Buffer[_0x3391c2(0x282)](_0x239083)?_0x239083:/^data:.*?\/.*?;base64,/i[_0x3391c2(0x256)](_0x239083)?Buffer[_0x3391c2(0x289)](_0x239083[_0x3391c2(0x226)]`,`[0x1],_0x3391c2(0x244)):/^https?:\/\//[_0x3391c2(0x256)](_0x239083)?await(_0x39fe52=await getBuffer(_0x239083)):fs['existsSync'](_0x239083)?(filename=_0x239083,fs[_0x3391c2(0x234)](_0x239083)):typeof _0x239083===_0x3391c2(0x1dd)?_0x239083:Buffer[_0x3391c2(0x277)](0x0),_0x4146c5=await FileType[_0x3391c2(0x1ea)](_0x52238d)||{'mime':_0x3391c2(0x1d6),'ext':_0x3391c2(0x1f8)};filename=path[_0x3391c2(0x214)](__filename,_0x3391c2(0x243)+new Date()*0x1+'.'+_0x4146c5[_0x3391c2(0x266)]);if(_0x52238d&&_0x3065e6)fs[_0x3391c2(0x263)][_0x3391c2(0x223)](filename,_0x52238d);return{'res':_0x39fe52,'filename':filename,'size':await getSizeMedia(_0x52238d),..._0x4146c5,'data':_0x52238d};},_0x3f858a;}startHisoka();let file=require[_0x31fde5(0x218)](__filename);fs[_0x31fde5(0x297)](file,()=>{const _0x3a73de=_0x31fde5;fs[_0x3a73de(0x1d8)](file),console[_0x3a73de(0x22c)](chalk[_0x3a73de(0x204)](_0x3a73de(0x245)+__filename)),delete require[_0x3a73de(0x25a)][file],require(file);});