from selenium import webdriver
import unittest

browser = webdriver.Firefox()


class NewVisitorTest(unittest.TestCase):

	def setUp(self):
		self.browser = webdriver.Firefox()
		self.browser.implicitly_wait(3)

	def tearDown(self):
		self.browser.quit()

	def test_can_start_a_list_and_retrieve_it_later(self):
		#Our user is interested in starting a poll with our new polling app. They
		#navigate to its home page.

		self.browser.get('http://localhost:8000')

		#They notice a page title and header mentioning polls.
		self.assertIn('Polling', self.browser.title)
		self.fail('Finish the test!')

#they are invited to enter a question.

#Our user creates a new question

#And now we see that the page lists the question as a poll.

#We check that wse have saved the Question object in teh database

#The question must have certain attributes: a publication date, and a question text

#When we change the question's attributes, these are reflected in our app.



if __name__ == '__main__':
	unittest.main()