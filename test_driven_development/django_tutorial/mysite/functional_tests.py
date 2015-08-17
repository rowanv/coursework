from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import unittest



class NewVisitorTest(unittest.TestCase):

	def setUp(self):
		self.browser = webdriver.Firefox()
		self.browser.implicitly_wait(3)

	def tearDown(self):
		self.browser.quit()

	def check_for_row_in_list_table(self, row_text):
		table = self.browser.find_element_by_id('id_list_table')
		rows = table.find_elements_by_tag_name('tr')
		self.assertIn(row_text, [row.text for row in rows])

	def test_can_save_a_polling_question_and_retrieve_it_later(self):
		#Our user is interested in starting a poll with our new polling app. They
		#navigate to its home page.

		self.browser.get('http://localhost:8000')

		#They notice a page title and header mentioning polling.
		self.assertIn('Polling', self.browser.title)


		header_text = self.browser.find_element_by_tag_name('h1').text
		self.assertIn('polling', header_text)

		#they are invited to enter a question.
		inputbox = self.browser.find_element_by_id('id_new_item')
		self.assertEqual(
			inputbox.get_attribute('placeholder'),
			'Enter a polling question')

		#Our user creates a new question: 'What is up?'
		inputbox.send_keys('What is up?')
		inputbox.send_keys(Keys.ENTER)

		#Our user enters another question: 'What is your favourite colour?'
		#inputbox.send_keys('What is your favourite colour?')
		#inputbox.send_keys(Keys.ENTER)

		#And now we see that the page lists the question as a poll.
		self.check_for_row_in_list_table('What is up?')
		#self.check_for_row_in_list_table('What is your favourite colour?')




#We check that wse have saved the Question object in teh database

#The question must have certain attributes: a publication date, and a question text

#When we change the question's attributes, these are reflected in our app.'''

if __name__ == '__main__':
	unittest.main()



if __name__ == '__main__':
	unittest.main()