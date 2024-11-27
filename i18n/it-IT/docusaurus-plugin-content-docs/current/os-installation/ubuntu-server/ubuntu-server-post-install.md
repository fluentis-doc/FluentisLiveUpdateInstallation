---
title: Post Installazione
sidebar_position: 1
---

### Facoltativo - Disabilitare il prompt della password con il comando sudo

Disabilitare il prompt della password con il comando **sudo** se stai lavorando su un server di test (il sistema richiederà la password ogni *n* minuti e potrebbe risultare un'esperienza spiacevole), modificando il file `/etc/sudoers`:

``` bash title="terminale"
sudo visudo
```

Aggiungere alla fine del file (a scopo dimostrativo verrà utilizzato un utente fittizio, chiamato example_user):

``` text title="etc/sudoers"
example_user ALL=(ALL) NOPASSWD:ALL
```

### Installazione aggiornamenti

Aggiornare la lista dei pacchetti disponibili e poi installarli o effettuare l'aggiornamento: 

```bash title="terminale"
sudo apt update && sudo apt upgrade
```

Questa operazione deve essere eseguita periodicamente se si vogliono installare gli ultimi aggiornamenti/patch di sicurezza (e non solo). Qualche volta potrebbe richiedere il riavvio del server.

### Configurare il fuso orario:

``` bash title="terminale"
sudo dpkg-reconfigure tzdata
```

:::caution

Impostare correttamente il fuso orario prima di installare *SQL Server* e *Fluentis* è determinante per il corretto funzionamento del ambiente. Se esso non viene cambiato si verrebbero a creare date e ore sbagliate in documenti importanti come fatture di vendita, ordini di produzione e così via.

:::

### Disabilitare gli aggiornamenti automatici

Per disabilitare gli aggiornamenti automatici (per migliorare la stabilità negli ambienti di produzione), modificare il file `/etc/apt/apt.conf.d/20auto-upgrades`:

``` bash title="terminale"
sudo nano /etc/apt/apt.conf.d/20auto-upgrades
```

Cambiando da "1" a "0" il valore dell'ultima riga del file:

``` text title="/etc/apt/apt.conf.d/20auto-upgrades"
...

APT::Periodic::Unattended-Upgrade "0"

...
```

### Disabilitare multipath per ambienti virtuali

Qualche volta in scenari di virtualizzazione (o per lo meno, utilizzaando VMWare), l'hypervisor non spedisce le informazioni (disk id) necessarie al servizio **multipath**. In questo scenario multipath non è richiesto e può essere disabilitato per i dischi virtuali.

Procedere quindi modificando il file **multipath.conf**:

``` bash title="terminale"
sudo nano /etc/multipath.conf
```

Aggiungere le seguenti righe al file:

``` text title="/etc/multipath.conf"
...

blacklist {
    devnode "^(ram|raw|loop|fd|md|dm-|sr|scd|st|sd[a-z])[0-9]*"
}
...
```

Riavviare il servizio **multipathd**

``` bash title="terminale"
sudo systemctl reload multipathd
```

Ripulire i log di sistema:

``` bash title="terminale"
sudo journalctl --rotate
sudo journalctl --vacuum-time=1s
```