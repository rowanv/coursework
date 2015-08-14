from selenium import webdriver


browser = webdriver.Firefox()

#Edith has heard about a cool new online to-do app. She goes
# to check out its homepage
browser.get('http://localhost:8000')


#She notices the page title and header mention to-do lists
assert 'To-do' in browser.title

#She is invited to enter a to-do item straight away

#She types 'buy peacock feathers into a text box'

#When she hits enter, the page updates, and now the page lists
#'1: Buy peacock feathers' as an item in a to-do list

#There is still atext box inviting her to add another item. She
# enters 'Use peacock feathers to make a fly'

#the page updates again, and now shoes both items on her list

#Edith wonders whether the site will remember her list. Then she sees
#that the site has generated a unique URL for her -- there is some
#explanatory text to that effect.

#she visits that URL -- her to-do list is still there.

#satisfied, she goes back to sleep
browser.quit()