import React from 'react';
import './tracker.scss';

const Tracker = () => {
  const isMobile = window.innerWidth <= 768; // Визначення мобільного пристрою

  return (
    <section className="tracker">
      <h2 style={{ fontSize: '2rem', marginTop: '8px' }}>Маршрут Зимовершника</h2>
      <div className="status-bar">

        {/* Статус: Острів Цейлон */}
        <div className="status-container active">
          <div className="elements">
            <div className="bullet green"></div>
            <div className="line"></div>
          </div>
          <div className="status-info">
            <span className="label">Острів Цейлон</span>
            <div className="details visible">
              <video 
                controls 
                src={isMobile ? "https://zymovershnyk.fun/images/1.mp4" : "https://zymovershnyk.fun/images/1-web.mp4"} 
                loop 
                muted 
                playsInline
              ></video>
              <div className="messages">
                <p style={{ fontWeight: '700' }}>
                  Зимовершник забрав подаруночки і вирушив з Острова! Починається велика пригода! 🌴
                </p>
                <p
                  style={{ fontStyle: 'italic', color: '#5a5a5a' }}
                  dangerouslySetInnerHTML={{
                    __html: '"Хей-хо, друже! <br/> Ох і спітнів я, поки збирав із зелених полів Цейлонщини твої подаруночки! Але вони того варті, бородою присягаюсь! <br/> Все, побігли ми з друзяками на корабель — побажай нам сім футів під кілем. <br/> Писатиму тобі частенько, тримай віконце відчиненим для Го-Го. Ця хитра птаха хоч мішок і не піднесе, але листа, певно ж, доставить!🤪"',
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>

        {/* Статус: Десь посеред океану */}
        <div className="status-container active">
          <div className="elements">
            <div className="bullet green"></div>
            <div className="line"></div>
          </div>
          <div className="status-info">
            <span className="label">Десь посеред океану</span>
            <div className="details visible">
              <video 
                controls 
                src={isMobile ? "https://zymovershnyk.fun/images/2.mp4" : "https://zymovershnyk.fun/images/2-web.mp4"} 
                loop 
                muted
                playsInline
              ></video>
              <div className="messages">
                <p style={{ fontWeight: '700' }}>
                  Океан штормить, але Зимовершник не зупиняється! 🌊
                </p>
                <p
                  style={{ fontStyle: 'italic', color: '#5a5a5a' }}
                  dangerouslySetInnerHTML={{
                    __html: '"Привіт-привіт, друже! <br/> Серед безкрайніх вод Індійського океану нас застала шалена буря! Хвилі гойдали корабель так, що здавалося, ніби ми осідлали дракона. Але ж ні — хвилі таки примусили нас трохи звернути з курсу. <br/> Та не біда! Ми з Го-Го та Зимком затягнули колядку, і навіть морські боги підспівували. Вітри стихли, і ми знову на шляху до тебе. <br/> Трохи затримуємося, але вже скоро подаруємо тобі частинку зимовершницької магії! 🎁✨"',
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>

        {/* Статус: Зимовершницька доставка до тебе */}
        <div className="status-container">
          <div className="elements">
            <div className="bullet active"></div>
          </div>
          <div className="status-info">
            <span className="label">Зимовершник вдома!🔥 Приймай гостинці та вітання!</span>
            <div className="details visible third">

              <div className="messages">
                {/* <p style={{ fontWeight: '700' }}>
                  Зимовершник вже підʼїжджає, зустрічай! 🎁
                </p> */}
                <p
                  style={{ fontStyle: 'italic', color: '#5a5a5a' }}
                  dangerouslySetInnerHTML={{
                    __html: `
                    Привіт, друже! 🎅 <br/><br/>

                    Ну що, я вдома! 🇺🇦 Україна зустріла нас з друзями засніженим ранком, ароматом куті й запрошенням на чай із сусідкою (але не хвилюйся, я відмовився – подарунки важливіші). Поки перекушую, відпочиваю після пригод і заряджаюся на розвезення подарунків в офіси, магазини, склади та цехи, маю для тебе дещо цікаве 🎁 <br/><br/>
                    
                    До мене в гості завітав мій старий друзяка. І доки я замовляв нам щось пожувати, він встиг записати відеопривітання прямо з кухні, хе-хе. У кадрі побачиш і мене, і Смаковершника, і Зимка, і Го-Го, і навіть трохи астрологічної магії. <br/><br/>
                    
                    Щоб ти не нудьгував у передсвятковому очікуванні, я підготував круту активацію – <b style={{ textTransform: 'uppercase' }}>збирай святковий пазл</b>! 🧩 Якщо станеш найшвидшим із першої спроби, подарую один із 25 мегасмачних продуктових кошиків (2025 = 25 кошиків, ну ти зрозумів). 🥳 Він точно наповнить твій святковий стіл усіма необхідними смаколиками — адже свята Зимовершника тривають!`
                  }}
                  />
                  <button className='gameBtn' onclick="goToPuzzle()">До пазла!</button>
                   <p
                  style={{ fontStyle: 'italic', color: '#5a5a5a' }}
                  dangerouslySetInnerHTML={{
                    __html: `
                    І головна новина: <b style={{ textTransform: 'uppercase' }}>подарунки вже в Україні!</b> Скоро твій надихаючий керівник чи помічник офісу повідомить, коли й де їх забирати. <br/><br/>
                    
                    Дякую, що весь цей час був поруч! Вітаю тебе з Новим роком! 🎄 Хай 2025 рік принесе тобі гори радості, океани тепла і всесвіт нових звершень! 🥂 <br/><br/>
                    
                    Обійняв-припідняв, твій Зимовершник 💙✨
                  `,
                }}
                ></p>
              </div>
              <div className="youtube-video">
                <iframe 
                  src="https://www.youtube.com/embed/JpjSoPMzp9g?autoplay=1&vq=hd1080" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Tracker;
