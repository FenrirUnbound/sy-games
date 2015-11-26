import json
import webapp2

class MainHandler(webapp2.RequestHandler):
    def _send_response(self, status=200, content=''):
        self.response.set_status(status)

        if len(content) > 0:
            self.response.headers['Content-Type'] = 'application/json'
            self.response.write(json.dumps(content))
        else:
            del self.response.headers['Content-Type']

    def get(self):
        content = {
            'status': 'OK'
        }
        self.response.set_status(200)
        self.response.headers['Content-Type'] = 'application/json'
        self.response.write(json.dumps(content))
