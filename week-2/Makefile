install:
        cp -p helloworld.js /usr/local/bin
        cp -p helloworld.service /etc/systemd/system
        systemctl daemon-reload
        systemctl enable --now helloworld.service

.PHONY: clean
clean:
        rm -f /usr/local/bin/helloworld.js
        systemctl stop helloworld.service
        rm -f /etc/systemd/system/helloworld.service
        systemctl daemon-reload
