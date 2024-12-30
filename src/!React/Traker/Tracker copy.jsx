import React, { useState } from 'react';
import './tracker.scss';

const Tracker = () => {
  const [statuses] = useState([
    {
      id: 1,
      label: 'Острів Цейлон',
      video: 'https://zymovershnyk.fun/images/1.mov',
      message: 'Зимовершник забрав подаруночки і вирушив з Острова! Починається велика пригода! 🌴',
      status: 'active',
      active: true,
      speach: '"Хей-хо, друже! <br/> Ох і спітнів я, поки збирав із зелених полів Цейлонщини твої подаруночки! Але вони того варті, бородою присягаюсь! <br/> Все, побігли ми з друзяками на корабель -— побажай нам сім футів під кілем. <br/> Писатиму тобі частенько, тримай віконце відчиненми для Го-Го. Ця хитра птаха хоч мішок і не піднесе, але листа, певно ж, доставить!🤪"'
    },
    {
      id: 2,
      label: 'Десь посеред океану',
      video: 'https://example.com/video2.mp4',
      message: 'Океан штормить, але Зимовершник не зупиняється! 🌊',
      status: 'active',
      speach: '"Хей-хо, друже! <br/> Ох і спітнів я, поки збирав із зелених полів Цейлонщини твої подаруночки! Але вони того варті, бородою присягаюсь! <br/> Все, побігли ми з друзяками на корабель -— побажай нам сім футів під кілем. <br/> Писатиму тобі частенько, тримай віконце відчиненми для Го-Го. Ця хитра птаха хоч мішок і не піднесе, але листа, певно ж, доставить!🤪"',
      active: false

    },
    // {
    //   id: 3,
    //   label: 'Йдемо на Босфор',
    //   video: null,
    //   message: 'Скоро пройдемо Босфор — останні милі до мети! 🌉',
    //   status: 'inactive',
    //   active: false
    // },
    // {
    //   id: 4,
    //   label: 'Швартуємося в Одесі',
    //   video: null,
    //   message: 'Привіт, Одеса! Зимовершник прибуває — час розкачувати портову ворушню та перевіряти документи! 🛳️🎉',
    //   status: 'inactive',
    //   active: false
    // },
    {
      id: 5,
      label: 'Зимовершницька доставка до тебе',
      video: null,
      message: 'Зимовершник вже підʼїжджає, зустрічай! 🎁',
      status: 'inactive',
      active: false
    },
  ]);


  return (
    <section className="tracker">
    <h2 style={{fontSize: '2rem', marginTop: '8px'}}>Маршрут Зимовершника</h2>
    <div className="status-bar">
      {statuses.map((status, index) => (
        <div key={status.id} className={`status-container ${status.status}`}>
          <div className='elements'>
          <div className={`bullet ${status.status}`}></div>
          {index < statuses.length - 1 && <div className="line"></div>}
          </div>
          <div className="status-info">
            <span className="label">{status.label}</span>
            {status.active && (
              <div className="details">
                {status.video && <video 
                controls src={status.video}  
                autoPlay
                loop
                muted
                playsInline>
                  </video>}
                  <div className='messages'>
                <p style={{fontWeight: '700'}}>{status.message}</p>
                <p style={{fontStyle: 'italic', color: '#ggfss'}} dangerouslySetInnerHTML={{ __html: status.speach }}></p>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
  );
};

export default Tracker;
