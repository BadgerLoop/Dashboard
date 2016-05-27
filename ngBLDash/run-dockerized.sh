 #!/bin/bash
#-v /nginx.conf:/etc/nginx/nginx.conf:ro
docker build -t bl-dash .
docker run --name bl-dash -p 80:80 -d bl-dash