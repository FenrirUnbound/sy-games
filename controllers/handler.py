from models.user import Users
import webapp2

from google.appengine.api import users

class Handler(webapp2.RequestHandler):
    def get(self):
        user = users.get_current_user()

        if user and user.email() in Users.whitelist:
            self._get()
        else:
            self.redirect(users.create_login_url(self.request.uri))
