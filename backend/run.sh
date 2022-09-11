#!/bin/sh

#
# Initialize system variables from Hashcorp's Vault
# Template should be in the Kubernetes Deployment object
# vault.hashicorp.com/agent-inject-secret-FILE: "FILE"
# vault.hashicorp.com/agent-inject-template-FILE: |
#     {{`{{- with secret "/vault/secrets/FILE" }}
#     {{- range $k, $v := .Data.data }}
#     export {{ $k }}={{ $v }}
#     {{- end }}
#     {{- end }}`}}
if [ -d /vault/secrets ]
then
    for file in $(ls /vault/secrets)
    do 
        source /vault/secrets/$file
    done
fi

# Add your application startup below this line
exec node server.js