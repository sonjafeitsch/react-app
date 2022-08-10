# Hands-On React

## Getting Started

Um die React-App starten zu können benötigst Du zunächst Node.js. Node.js ist eine Laufzeitumgebung für JavaScript, mit der sowohl Frontends als auch Backends betrieben werden können. Für macOS kann Node ganz einfach mit brew direkt in der Kommandozeile installiert werden. Weitere Infos zu Node.js findest Du auf der offiziellen Homepage unter [https://nodejs.org/en/](https://nodejs.org/en/).

```
brew install node
```

Teste mit folgenden Befehl ob die Installation erfolgreich war:

```
node -v
```

Der Output sollte dabei 16.0.0 oder höher sein.

Außerdem benötigen wir einen Package Manager, um alle Abhängigkeiten unserer App installieren und die App starten zu können. Für unser erstes Projekt können wir auf `npm` als Package Manager zurückgreifen, welcher bei der Installation von Node.js automatisch dabei ist.

Teste auch hier mit folgenden Befehl ob `npm` auf Deinem Rechner installiert ist:

```
npm -v
```
Der Output sollte dabei 8.0.0 oder höher sein.

Klone Dir im nächsten Schritt das Repository mit unserem Test-Projekt.

```
git clone ssh://git-codecommit.eu-central-1.amazonaws.com/v1/repos/react-app
```

Wechsel in das Verzeichnis des Respos und installiere mit `npm install` die notwendigen Abhängigkeiten. Mit `npm start` kannst Du dann die React App ganz einfach starten. Mit `npm start` fährt die React App automatisch hoch und kann direkt unter `localhost:3000` aufgerufen werden. Sollte der Port 3000 belegt sein, bekommst Du normalerweise direkt einen Hinweis auf der Kommandozeile und Du kannst einen alternativen Port auswählen. Am Ende solltest Du auf einer weißen Seite mit dem Text "Hello React" landen.

```
cd react-app
npm install
npm start
```

Zu guter Letzt brauchst Du noch eine Entwicklungsumgebung und ich empfehle Dir VSCode. VSCode kannst Du Dir einfach über die offizielle Website unter [https://code.visualstudio.com/Download](https://code.visualstudio.com/Download) installieren.
