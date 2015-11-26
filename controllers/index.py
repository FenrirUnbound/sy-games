import handler
import os
import webapp2

from google.appengine.ext.webapp import template

class MainHandler(handler.Handler):
    def _get(self):
        path = os.path.join(os.path.dirname(__file__), '../views/main.html')
        self.response.out.write(template.render(path, {}))
