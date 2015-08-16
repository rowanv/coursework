
from django.test import TestCase
from django.core.urlresolvers import resolve
from django.http import HttpRequest
from django.template.loader import render_to_string

from polls.views import home_page
from polls.models import Item



class HomePageTest(TestCase):

	def test_root_url_respolves_to_home_page_view(self):
		found = resolve('/')
		self.assertEqual(found.func, home_page)

	def test_home_page_returns_correct_html(self):
		request = HttpRequest()
		response = home_page(request)
		expected_html = render_to_string('home.html')
		self.assertEqual(response.content.decode(), expected_html)

	def test_home_page_can_save_a_post_request(self):
		request = HttpRequest()
		request.method = 'POST'
		request.POST['item_text'] = 'A new question'

		response = home_page(request)

		self.assertIn('A new question', response.content.decode())
		expected_html = render_to_string(
			'home.html',
			{'new_item_text': 'A new question'}
		)
		self.assertEqual(response.content.decode(), expected_html)

class ItemModelTest(TestCase):

	def test_saving_and_retriving_items(self):
		first_item = Item()
		first_item.text = 'The first (ever) question'
		first_item.save()

		second_item = Item()
		second_item.text = 'Item the second'
		second_item.save()

		saved_items = Item.objects.all()
		self.assertEqual(saved_items.count(), 2)

		first_saved_item = saved_items[0]
		second_saved_item = saved_items[1]
		self.assertEqual(first_saved_item.text, 'The first (ever) question')
		self.assertEqual(second_saved_item.text, 'Item the second')