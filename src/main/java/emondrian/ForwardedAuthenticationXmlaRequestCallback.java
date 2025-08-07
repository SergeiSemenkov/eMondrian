// Copyright (C) 2025 Sergei Semenkov

package emondrian;

import org.w3c.dom.Element;

import java.util.Map;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import mondrian.xmla.XmlaRequestCallback;
import org.apache.catalina.realm.GenericPrincipal;

public class ForwardedAuthenticationXmlaRequestCallback implements XmlaRequestCallback {

    public void init(ServletConfig servletConfig){
    }

    public boolean processHttpHeader(
            HttpServletRequest request,
            HttpServletResponse response,
            Map<String, Object> context) {

        context.put(mondrian.xmla.XmlaConstants.CONTEXT_XMLA_AUTHENTICATED_USER, request.getHeader("X-Forwarded-User"));
        context.put(mondrian.xmla.XmlaConstants.CONTEXT_XMLA_AUTHENTICATED_USER_GROUPS, request.getHeader("X-Forwarded-Groups"));

        return true;
    }

    public void preAction(
            HttpServletRequest request,
            Element[] requestSoapParts,
            Map<String, Object> context) {
    }

    public String generateSessionId(Map<String, Object> context) {
        return null;
    }

    public void postAction(
            HttpServletRequest request,
            HttpServletResponse response,
            byte[][] responseSoapParts,
            Map<String, Object> context) {
    }
}
