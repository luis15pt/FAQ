
cd /home/ubuntu/
#remove old FAQ and get new one, use sphinx to get the output
sudo rm -r FAQ ; git clone https://github.com/luis15pt/FAQ && sudo docker run -it --rm -v /home/ubuntu/FAQ:/docs sphinxdoc/sphinx make html

#start httpd with the contents of the output of the command before this one.
sudo docker rm -f FAQ-Sphinx && sudo docker run -dit --name FAQ-Sphinx -p 8080:80 -v /home/ubuntu/FAQ/_build/html/:/usr/local/apache2/htdocs/ httpd:2.4
