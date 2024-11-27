---
title: Post Installazione
sidebar_position: 1
---

:::caution Attenzione
Alcune operazioni richiedono i privilegi root e di default, Photon OS nella versione *minimal*, non include il programma **sudo**. Quindi procedere al download/installazione del pacchetto:

```bash title="terminale"
sudo tdnf install sudo
```

Puoi leggere ulteriori informazioni a riguardo visitando il sito della [documentazione ufficiale di Photon OS](https://vmware.github.io/photon/assets/files/html/3.0/photon_admin/root_account_and_sudo_commands.html).
:::

Completata l'installazione del sistema operativo si può effettuare il login (tramite una connessione SSH) con l'utente root, per poter creare un nuovo utente:

```bash title="terminale"
useradd -m -G sudo [user_name]
```

Impostare quindi una password per il nuovo utente:

```bash title="terminale"
passwd [user_name]
```

Lanciare l'aggiornamento di tutti i pacchetti installati:

```bash title="terminale"
sudo tdnf upgrade
```

:::info
Il comando **tdnf** (Tiny Dandified Yum, o il più conosciuto Yum) si riferisce al package manager di Photon OS che è l'equivalente del package manager **apt** (Aptoide) utilizzando nella distribuzione *Ubuntu*.
:::

A questo punto è richiesto il riavvio del server:

```bash title="terminale"
sudo reboot now
```

Effettuare il login con il nuovo utente per cambiare il fuso orario (verificando nella lista dei fusi orario che può essere consultata nel file `/usr/share/zoneinfo`) e verificare che sia correttamente impostato, utilizzando i comandi:

```bash title="terminale"
set Europe/Rome timezone
sudo ln -lf /usr/share/zoneinfo/Europe/Rome /etc/localtime
date
```

:::tip 
Di default l'editor testuale **nano** non è installato, quindi per poterlo utilizzare procedere prima al download/installazione del pacchetto:

```bash title="terminale"
sudo tdnf install nano
```
:::