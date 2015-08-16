from selenium import webdriver
from selenium.webdriver.common.keys import Keys
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
		header_text = self.browser.find_element_by_tag_name('h1').text
		self.assertIn('Polling', header_text)

		#they are invited to enter a question.
		inputbox = self.browser.find_element_by_id('id_new_item')
		self.assertEqual(
			inputbox.get_attribute('placeholder'),
			'Enter a polling question')

		#Our user creates a new question: 'What's up?'
		inputbox.send_keys('What\'s up?')
		inputbox.send_keys(Keys.ENTER)

		#And now we see that the page lists the question as a poll.
		table = self.browser.find_element_by_id('id_list_table')
		rows = table.find_elements_by_tag_name('tr')
		self.assertTrue(
			any(row.text == 'What\s up?' for row in rows)
			)

#We check that wse have saved the Question object in teh database

#The question must have certain attributes: a publication date, and a question text

#When we change the question's attributes, these are reflected in our app.



if __name__ == '__main__':
	unittest.main()