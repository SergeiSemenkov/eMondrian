FROM tomcat:10.1.57

LABEL org.opencontainers.image.vendor="emondrian"
LABEL org.opencontainers.image.authors="emondrian"
LABEL org.opencontainers.image.title="emondrian"
LABEL org.opencontainers.image.version="10.0.35"

# Clean default apps
RUN rm -rf /usr/local/tomcat/webapps/*

# Copy and unpack WAR at build time
COPY emondrian.war /tmp/emondrian.war
RUN mkdir /usr/local/tomcat/webapps/emondrian \
 && cd /usr/local/tomcat/webapps/emondrian \
 && jar -xf /tmp/emondrian.war \
 && rm /tmp/emondrian.war

EXPOSE 8080

# tomcat:10.1.57 is a JRE-slim image with neither curl nor wget, so the
# healthcheck uses bash's /dev/tcp instead of relying on either being present.
HEALTHCHECK CMD bash -c 'exec 3<>/dev/tcp/localhost/8080 && printf "GET /emondrian HTTP/1.0\r\n\r\n" >&3 && head -1 <&3 | grep -qE "HTTP/1\.[01] [0-9]{3}"'
