# nx-navbar


## Html Code

```html
<nx-navbar data-options="{..json..}" class="brand-center">
    <div slot="topbar" class="collapse-on-scroll">
        <!-- wenn slot nicht definiert: keine topbar einblenden -->
        <ul>
            <li><a href="#">Kontakt</a></li>
            <li><a href="#">Telefon</a></li>
        </ul>
    </div>
    
    <div slot="brand-logo">
        <a href="/"><img src="logo.png" alt="Logo"></a>
        <!-- Hier soll aber auch Text mit fester Breite stehen können -->
    </div>
    
    <div slot="menubar">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Leistungen</a>
                <ul>
                    <li><a href="#">Unterseite 1</a></li>
                    <li><a href="#">Unterseite 2</a></li>
                    <li><a href="#">Unterseite 3</a></li>
                </ul>
                <!-- nach möglichkeit automatische erkennung auf untermenüs. Konfigurierbar in nx-options, ob on hover oder click untermenü geöffnet wird. -->
            </li>
            <li><a href="#">Über uns</a></li>
            <li><a href="#">Kontakt</a></li>
        </ul>
        <!-- ggf weitere Elemente wie Suchfeld, Warenkorb, Login/logout Button, Dark/Light Theme / Übersetzungen -->
    </div>
    
    <div slot="bottombar" class="collapse-on-scroll">
        <!-- wenn slot nicht definiert: keine topbar einblenden -->
        <ul>
            <li><a href="#">Kontakt</a></li>
            <li><a href="#">Telefon</a></li>
        </ul>
    </div>
</nx-navbar>
```


## Beispiele

- https://www.zahnarztpraxis-sedlmaier.de/ (Overlay mit zwei Logovariationen)
- https://www.leuffen.de (Individuelle Untermenüs (später), Overlay, Buttons, Scroll-Verhalten)
- https://www.och-za.de (Scroll Verhalten, Center-Logo, Zoom, Overlay)
- https://www.dr-mcmueller.de
- https://www.alvi-co.de
- https://www.ge-faess.de/   (Logo über topbar und menubar)


## Zu nutzende Frameworks

- LitElement

## Anforderungen

- Definition des Styles per CSS-Variablen. 
- Alles Funktionale passiert im ShadowDom
- Konfiguration des Verhaltens per JSON Objekt
- Automatisches zentrieren von unterschiedlich hohen elementen
- Bestes Verhalten bei overflow? -> Elemente müssen weiter navigierbar bleiben! 
- Schriftarten / Größe etc nicht manuell setzen - diese werden vom Theme übernommen

## Config-Objekt

```json
{
  "style": sticky | collapse | overlay | fixed,
  "spacer": true | false,
  ...
}
```
