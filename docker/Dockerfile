FROM tomcat:9.0.52

LABEL org.opencontainers.image.vendor="emondrian"
LABEL org.opencontainers.image.authors="emondrian"
LABEL org.opencontainers.image.title="emondrian"
LABEL org.opencontainers.image.version="1.0.0"

# Clean default apps
RUN rm -rf /usr/local/tomcat/webapps/*

# Copy WAR
COPY target/emondrian.war /usr/local/tomcat/webapps/

#COPY docker/context.xml /usr/local/tomcat/conf/context.xml

EXPOSE 8080

HEALTHCHECK CMD curl -f http://localhost:8080/ || exit 1
