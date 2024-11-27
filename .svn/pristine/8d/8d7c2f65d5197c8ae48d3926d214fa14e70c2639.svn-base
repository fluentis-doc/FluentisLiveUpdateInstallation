---
title: Installazione
sidebar_position: 0
---

:::caution Attenzione
Utilizzare sempre la versione Long Term Support (LTS) di Ubuntu Server, poichè sono versioni di livello enterprise supportate gratuitamente per 5 anni. Per ulteriori informazioni sul ciclo di vita della release e la cadenza di rilascio di una nuova release visitare il [sito ufficiale](https://ubuntu.com/about/release-cycle).

L'articolo è basato sulla versione di Ubuntu Server 22.04 è utilizzeremo l'hypervisor VMWare.
:::

### Prerequisiti

- L'immagine ISO di Ubuntu Server LTS (64-bit) all'ultima versione (al momento la 22.04). La puoi scaricare dal [sito ufficiale Ubuntu](https://ubuntu.com/download/server).

### Step 1 - Installazione di Ubuntu

Utilizzando il software di virtualizzazione preferito (come ad esempio vSphere) o una server fisico, scegliere l'immagine ISO come file di startup e avviare il server.

Una volta che il server è avviato, ci saranno diverse opzioni che dovranno essere propriamente configurate. Seguire quindi la guida sottostante, per orientarsi nel processo di installazione:

 - Scegliere una lingua di sistema, in questo caso l'inglese:

![language-select](/img/neutral/os-installation/ubuntu-server-install/language-select.png)

 - Scegliere la voce aggiornare al nuovo installer (se viene saltato questo step, verrà riproposto in un secondo momento quando la configurazione del server sarà conclusa):

![installer-update](/img/neutral/os-installation/ubuntu-server-install/installer-update.png)

 - Scegliere il layout di tastiera desiderato e confermare:

![keyboard-configuration](/img/neutral/os-installation/ubuntu-server-install/keyboard-configuration.png)

 - In base alle vostre necessità, impostare tra le interfacce disponibili, un IP statico o lasciare il DHCP attivo e infine confermare:

![network-connections](/img/neutral/os-installation/ubuntu-server-install/network-connections.png)

 - Non è richiesta alcuna configrazione proxy, quindi confermare:

![proxy-configuration](/img/neutral/os-installation/ubuntu-server-install/proxy-configuration.png)

 - Confermare il package archive mirror proposto automaticamente, da dove verranno scaricati gli aggiornamenti dei pacchetti (è localizzato in questo caso per l'Italia):

![mirror-configuration](/img/neutral/os-installation/ubuntu-server-install/mirror-configuration.png)

 - Confermare la configurazione per l'archiviazione:

![storage-configuration](/img/neutral/os-installation/ubuntu-server-install/storage-configuration.png)

 - Confermare il riepilogo della configurazione per l'archiviazione:

![storage-configuration-recap](/img/neutral/os-installation/ubuntu-server-install/storage-configuration-recap.png)

 - Confermare l'alert che ci avverte che stiamo effettuando un azione potenzialmente dannosa (in quanto è coinvolta un'azione di cancellazione dei dati sul disco scelto):

![storage-configuration-confirm](/img/neutral/os-installation/ubuntu-server-install/storage-configuration-confirm.png)

 - Immettere le credenziali, facendo particolarmente attenzione al nome del server, allo username, alla password e infine, confermare per procedere:

![profile-setup](/img/neutral/os-installation/ubuntu-server-install/profile-setup.png)

 - Flaggare la checkbox installa OpenSSH server (necessaria alla connessione in SSH verso questa server, se precedentemente si è anche impostato un IP statico) e confermare:

![ssh-setup](/img/neutral/os-installation/ubuntu-server-install/ssh-setup.png)

 - Non installare nessun pacchetto aggiuntivo e confermare:

![install-additional-packages](/img/neutral/os-installation/ubuntu-server-install/install-additional-packages.png)

 - A questo punto l'installazione verrà avviata:

![installing-system](/img/neutral/os-installation/ubuntu-server-install/installing-system.png)

 - Una volta che l'installazione è completa, confermare il riavvio del server: Once the installation is complete, confirm the **reboot** of the machine:

![install-complete](/img/neutral/os-installation/ubuntu-server-install/install-complete.png)

 - Il sistema chiederà di rimuovere il CD o l'immagine ISO utilizzata per l'installazione, premere quindi il tasto invio per proseguire: 

![remove-install-iso](/img/neutral/os-installation/ubuntu-server-install/remove-install-iso.png)

 - Dopo il riavvio premere invio per proseguire:

![enter-to-login](/img/neutral/os-installation/ubuntu-server-install/enter-to-login.png)

 - Effettuare il login con le credenziali create in precedenza:

![system-login](/img/neutral/os-installation/ubuntu-server-install/system-login.jpg)

 - Se i precedenti steps sono stati effettuati correttamente, il server sarà pronto all'utilizzo:

![system-login-succeded](/img/neutral/os-installation/ubuntu-server-install/system-login-succeded.jpg)

Ci si potrà infine connettere in SSH, prendendo nota dell'IP del server, se si è impostato il DHCP e poi continuare con le step 2 di questo articolo.

``` bash title="terminale"
ip addr
```

### Step 2 - Connessione al server Ubuntu tramite SSH

Il modo più sicuro, semplice e affidabile per connettersi ad un server linux headless e tramite la connessione SSH.

Per prima cosa aprire un prompt dei comandi di Windows (se si sta effettuando l'accesso da una pc Windows, o alternativamente un terminale se si sta effettuando l'accesso da un pc Linux), e utilizzare il comando **ssh** passando il nome utente del server seguito da una chiocciola e l'IP o hostname del server a cui ci si vuole collegare (nello snippet di codice vengono utilizzati dei valori fittizi):

``` bash title="prompt/terminale"
ssh [user_name]@[ip_address]
```

 ![ssh-login](/img/neutral/os-installation/ubuntu-server-install/ssh-login.png)

Successivamente verrà richiesto di verificare se il server corrisponde a quell'IP/hostname (se non è questo il caso, verrà considerato come un problema di sicurezza e non si potrà procedere), quindi confermare:

 ![ssh-login-confirm](/img/neutral/os-installation/ubuntu-server-install/ssh-login-confirm.png)

E' ora possibile connettersi al server Ubuntu precedentemente creato.

![ssh-login-succeded](/img/neutral/os-installation/ubuntu-server-install/ssh-login-succeded.jpg)