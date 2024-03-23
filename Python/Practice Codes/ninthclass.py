url = "www.example.com/product?name=abc&color=blue"
def extract_components(url):
    url_dictionary={}
    url_components = url.split("?")[1].split("&")
    for item in url_components:
        url_dictionary[(item.split("=")[0])]=item.split("=")[1]
    return url_dictionary

def handle_user(name="",color=""):
    print(name,color)

def handle_product(name="", height="", width="", color=""):
    print(name, height, width, color)

def extract_type(url):
    components = extract_components(url)
    type = url.split("?")[0].split("/")[1]
    endpoint_dict = {
        "user": handle_user,
        "product": handle_product
    }
    endpoint_dict[type](**components)

extract_type(url)