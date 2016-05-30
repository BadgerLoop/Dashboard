import json
# import riffle
import time
from haproxystats import HAProxyServer



# class Backend(riffle.Domain):
#     def onJoin(self):
#     	print('joined node!')
# app = riffle.Domain("xs.node")
# print('set up app')
# riffle.SetFabric("ws://192.168.99.100:8000")
# Backend("backend", superdomain=app).join()
    	# app.publish('haproxy','test')

def get_haproxy_data():
	haproxy = HAProxyServer('192.168.99.100:1936', 'auth', 'auth')
	json_data = json.loads(str(haproxy.to_json()))
	return json_data


def send_riffle(data):
	
	print('setting up connection')
	return
	
	#backend = riffle.Domain("backend", superdomain=app)
	        # Exis code goes here


#print(haproxy.to_json().keys())

#print(json_data['192.168.99.100']['backends'])
up = 0
down = 0

for backend in get_haproxy_data()['192.168.99.100']['backends']:
	for lis in backend['listeners']:
		# print(lis['svname'])
		# print(lis['status'])
		if lis['status'] == 'UP':
			up = up+1
		else:
			down = down+1
print(up)
print(down)

# for a in json_data:
# 	print(a)
def write_data(data):
	with open('haproxydata.json', 'w') as outfile:
		json.dump(data, outfile)
while 1:
	tup = 0
	tdown = 0
	data = {}
	data['up'] = []
	data['down'] = []
	for backend in get_haproxy_data()['192.168.99.100']['backends']:
		for lis in backend['listeners']:
			if lis['status'] == 'UP':
				data['up'].append(lis['svname'])
			else:
				data['down'].append(lis['svname'])
			# print(lis['svname'])
			# print(lis['status'])
			# if lis['status'] == 'UP':
			# 	tup = tup+1
			# else:
			# 	tdown = tdown+1
	write_data(data)
	# if tup>up:
	# 	print("node went up")
	# 	up = tup*1
	# 	down = tdown*1
	# 	print(up)
	# 	print(down)
	# elif tdown>down:
	# 	print("node went down")
	# 	up = tup*1
	# 	down = tdown*1
	# 	print(up)
	# 	print(down)
	# else:
	# 	print('nothing happend')
	# 	# send_riffle(down)
	# time.sleep(1)
