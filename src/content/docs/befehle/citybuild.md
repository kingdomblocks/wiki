---
title: ⌨️ CityBuild Befehle
description: Eine Übersicht über alle CityBuild (Elysia) spezifischen Befehle.
---

Diese Befehle sind exklusiv für den CityBuild-Server **Elysia** verfügbar und dienen der Verwaltung der Plots sowie Shops.

## 🏡 Plot Verwaltung
* `/cbspawn` - Teleportiert dich direkt zum CityBuild Spawnplot.
* `/p auto` - Erstelle dir von überall aus schnell ein neues Grundstück.
* `/p home [<id>]` - Teleportiere dich zu einem deiner Grundstücks-Homes.
* `/plotmenu` - Öffnet das übersichtliche GUI zur Verwaltung deines Grundstücks.
* `/merge` - Verbinde dein Grundstück mit einem benachbarten Grundstück (das dir gehört).
* `/claim` - Hiermit kannst du Grundstücke über deinem Limit dazukaufen.
* `/p visit <spieler> [<id>]` - Teleportiere dich (auch von überall aus) auf das Grundstück eines anderen Spielers.
* `/setowner <spieler>` - Übertrage dein Grundstück (dich als Besitzer) an einen anderen Spieler.
* `/pc` oder `/plotchat <nachricht>` - Schreibe eine Nachricht, die nur Spieler lesen können, die sich auf dem gleichen Grundstück befinden.

## 🎨 Grundstück Anpassung
* `/boden` - Öffnet ein GUI zum Ändern deines Grundstücksbodens.
* `/rand` - Öffnet ein GUI zum Ändern deines Grundstückrandes.
* `/wand` - Öffnet ein GUI zum Ändern deiner Grundstückwand.
* `/flags` - Öffnet ein GUI zum Anpassen detaillierter Grundstücks-Einstellungen (Flags).
* `/cbspawn settings` - Lege deinen eigenen, bevorzugten Spawnpunkt auf dem Grundstück fest.

## 🛒 Wirtschaft & Shops
* `/chestshop create <name>` - Erstelle einen Kistenshop (Achte auf die Beschilderung der Kiste!).
* `/chestshop list [seite]` - Zeige eine Liste all deiner Kistenshops an.
* `/chestshop addplayer <shop> <spieler>` - Erlaube einem anderen Spieler, deinen Kistenshop zu verwalten.
* `/chestshop remove <shop> <spieler>` - Entferne die Rechte eines Spielers von deinem Kistenshop.
* `/chestshop rename <shop> <name>` - Benenne deinen Kistenshop um.
* `/preis <betrag>` - Verwende dies zur schnellen Anpassung/Festlegung von Preisen im Kistenshop.
* `/pay <spieler> <anzahl>` - Überweise unkompliziert Geld an einen anderen Spieler.
* `/spezialtrichter` - Kaufe dir für $1.000 einen Spezialtrichter, z.B. zum automatischen Sortieren in Shops.
