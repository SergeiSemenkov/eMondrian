FROM tomcat:9.0.52

LABEL org.opencontainers.image.vendor="emondrian"
LABEL org.opencontainers.image.authors="emondrian"
LABEL org.opencontainers.image.title="emondrian"
LABEL org.opencontainers.image.version="1.0.0"

# Clean default apps
RUN rm -rf /usr/local/tomcat/webapps/*

# Copy and unpack WAR at build time
COPY target/emondrian.war /tmp/emondrian.war
RUN mkdir /usr/local/tomcat/webapps/emondrian \
 && cd /usr/local/tomcat/webapps/emondrian \
 && jar -xf /tmp/emondrian.war \
 && rm /tmp/emondrian.war

EXPOSE 8080

HEALTHCHECK CMD curl -f http://localhost:8080/ || exit 1
