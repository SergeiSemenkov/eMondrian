FROM tomcat:10.1.57

LABEL org.opencontainers.image.vendor="emondrian"
LABEL org.opencontainers.image.authors="emondrian"
LABEL org.opencontainers.image.title="emondrian"
LABEL org.opencontainers.image.version="10.0.102"

# Clean default apps
RUN rm -rf /usr/local/tomcat/webapps/*

# 32 KB of request headers instead of Tomcat's 8 KB: behind an authentication gateway every request
# carries the user's groups (X-Forwarded-Groups) and access token (X-Forwarded-Access-Token). Set
# on the base image's own HTTP connector, so the rest of its server.xml stays as Tomcat ships it;
# the build fails if that connector is not found exactly once.
RUN f=/usr/local/tomcat/conf/server.xml \
 && test "$(grep -c '<Connector port="8080" protocol="HTTP/1.1"$' "$f")" = 1 \
 && sed -i 's#<Connector port="8080" protocol="HTTP/1.1"$#<Connector port="8080" protocol="HTTP/1.1" maxHttpHeaderSize="32768"#' "$f" \
 && test "$(grep -c 'maxHttpHeaderSize="32768"' "$f")" = 1

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
