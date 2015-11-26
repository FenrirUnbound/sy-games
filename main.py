from controllers import index, status
from webapp2_extras import routes
import webapp2

from google.appengine.ext.webapp import util

def main():
    application = get_app()
    util.run_wsgi_app(application)

def get_app():
    application = webapp2.WSGIApplication([
            routes.PathPrefixRoute('/api/v1', [
                webapp2.Route('/status', status.StatusHandler)
            ]),
            ('/.*', index.MainHandler),
        ], debug=True)
    return application

app = get_app()

if __name__ == '__main__':
    main()
