import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '1Mes';

  frases:string[]=['Mi lugar favorito en el mundo es a tu lado','Eres la manera que tiene el mundo de decirme lo bonita que es la vida','Cuando un corazón elige a una persona, el resto da igual, y el mío te eligió a ti',"Tus metas son más grandes que tus miedos","Superar aquello que te asusta es lo que más te fortalecerá","Te miro y confirmo que eres con quien quiero pasar el resto de mis días","La belleza de una rosa no tiene comparación con la dulzura de tu rostro y la hermosura de tu corazón","Te verías linda con la luz del amanecer y también con la del atardecer, bueno tú siemrpe luces perfecta <3","Ya lo dijo Farruko en Sunset: 'Tu me gustas mucho y lo sabes, como tu no existe nadie. Ya casi se esconde el sol y quiero abrazarte mi amor....' ","Oye... no olvides que aquí tienes alguien que le importas, que te quiere mucho y que piensa que eres lo mejor del mundo","Hola... te quiero decir algo importante... y es que... para mi tu eres perfecta, bella, incomparable, linda, tierna y sobre todo la chica más hermosa de todo el mundo","Se como la Luna y brilla incluso cuando estes lejos de sentirte llena", "Nadie es como tu y ese es tu poder",
                   "Notita para recordarte que me gustas","Me encanta verte sonreir, porfa nunca dejes de hacerlo","Tengo miles de motivos y ganas de continuar esto por toda la eternidad. Quiero que juntos sigamos escribiendo nuestra historia", "Te quiero así, como eres, con todo lo bueno que no ves y con todo lo malo que dices tener","Obvio que me gustas, tienes unos ojitos perfectos y una sonrisa que enamora","Lo que más me gusta de ti, no es lo que veo, es lo que me haces sentir","Necesito que sepas que incluso en la distancia, siempre estoy pensando en ti" ]

  frase=this.frases[Math.floor(Math.random() * (19 - 0 + 1) + 0)]

}