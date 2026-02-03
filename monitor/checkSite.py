import requests
import smtplib,ssl

def check_website_up(url):
    try:
        response = requests.get(url, timeout=10)
        if response.status_code != 200:
            return False
        return True
    except requests.RequestException:
        return False
    
def send_alert(sender, receiver, password):
    port = 465  # For SSL
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL("smtp.gmail.com", port, context=context) as server:
        server.login(sender, password)
        message = "Hi smth is rlly wrong"
        server.sendmail(sender, receiver, message)

if __name__ == "__main__":
    url = "https://monica-lu.github.io/"
    sender_email = "hemis1227@gmail.com"
    receiver_email = "hemis1227@gmail.com"
    password = "ajdxwknaytqjangt"
    if not check_website_up(url):
        send_alert(sender_email, receiver_email, password)
    else:
        print("Website is up.")
        