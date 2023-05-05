# kafkAlerts 

<p align="center">
  <img src="src/assets/logo.png" width=300px 
    style="background-image: linear-gradient(
      to right,
      rgb(249, 75, 6) 0%,
      hsla(42, 94%, 57%, 1) 100%
    ); border-radius:50%">
</p>
<h3 align="center">Open source, usability driven web application for monitoring and alerting Apache Kafka broker metrics</h3>
</br>

---

## Table of Contents

- [Product Description](#product-description)
- [Install and Run](#install-and-run)
- [Install Locally](#install-locally)
- [How to Use](#how-to-use)
- [Contribute](#contribute)
- [Our Team](#our-team)
- [License](#license)

---

## Product Description
With usability and accessibility at the forefront of all our design decisions, kafkAlerts offers a better way to visualize Kafka broker metrics and receive alerts. Only the most relevant data renders on the screen, including what brokers are alerting and appropriate metrics for those brokers. 

All other brokers will be listed in your feed and can be expanded to view metrics with the click or press of a button. 

---

## Install and Run
To begin using kafkAlerts, navigate to <a href="http://www.kafkAlerts.com">kafkalerts.com</a> and create an account. 
- Make sure that Prometheus is running and connected to your cluster. 
- Click on the user menu icon in the top right.
- Click on 'Connect Cluster'.
- Input your Prometheus instance and broker ids.


### Install Locally
If you would prefer to run kafkAlerts locally, you may fork and clone our Github repository. 
- In your terminal run:
  - `npm install`
  - `npm run dev` 
- Once the application is running, navigate to localhost:3000 and input the port of your Prometheus server and brokers you would like to monitor.

---

## How to Use
Once you have successfully installed kafkAlerts and connected to your cluster, simply log in to view all of your brokers in one place. 
- If any brokers are alerting, you will see them listed by id in your alerts menu. 
- Click on that id to be taken directly to the alerting broker. Here you can find metrics that may indicate where there is an issue. 
- Click on non-alerting brokers to view their metrics and see how they are generally performing. 
- To add more brokers, simply go to the user menu at the top, click on 'Connect Cluster' and add any additional broker ids. 

---

## Contribute

If you would like to contribute to this product by improving current functionality or adding a feature, please fork the repository and submit a pull request. 

Some of our planned features for kafkAlerts include:

- Additional testing
- Custom metrics
- User defined accessibility templates
- Adding OAuth authentication
- Alerting based on user defined SLIs
- Expanding metric insights

---

## Our Team
Questions, comments, concerns... funny memes? Reach out to us any time!

<table align="center">
  <tr>
    <td align="center">
      <img src="src/assets/headshots/hazel-headshot.jpg" width="140px;" alt=""/>
      <br />
      <sub><b>Hazel Bolivar</b></sub>
      <br />
      <a href="https://github.com/hazelbolivar"><img src="src/assets/icons/github-mark.png" width="20px;" alt=""/></a>
      <a href="https://www.linkedin.com/in/hazelbolivar/"><img src="src/assets/icons/linkedin.png" width="20px;" alt=""/></a>
    </td>
    <td align="center">
      <img src="src/assets/headshots/ian-headshot.jpg" width="140px;" alt=""/>
      <br />
      <sub><b>Ian Flynn</b></sub>
      <br />
      <a href="https://github.com/ian-flynn"><img src="src/assets/icons/github-mark.png" width="20px;" alt=""/></a>
      <a href="https://www.linkedin.com/in/ianrflynn/"><img src="src/assets/icons/linkedin.png" width="20px;" alt=""/></a>
    </td>
    <td align="center">
      <img src="src/assets/headshots/krystal-headshot.jpg" width="140px;" alt=""/>
      <br />
      <sub><b>Krystal Fung</b></sub>
      <br />
      <a href="https://github.com/klfung7"><img src="src/assets/icons/github-mark.png" width="20px;" alt=""/></a>
      <a href="https://www.linkedin.com/in/krystal-fung/"><img src="src/assets/icons/linkedin.png" width="20px;" alt=""/></a>
    </td>
     <td align="center">
      <img src="src/assets/headshots/annie-headshot.png" width="140px;" alt=""/>
      <br />
      <sub><b>Annie Rosen</b></sub>
      <br />
      <a href="https://github.com/mezzocarattere"><img src="src/assets/icons/github-mark.png" width="20px;" alt=""/></a>
      <a href="https://www.linkedin.com/in/rosen-annie/"><img src="src/assets/icons/linkedin.png" width="20px;" alt=""/></a>
    </td>
    <td align="center">
      <img src="src/assets/headshots/jeb-headshot.png" width="140px;" alt=""/>
      <br />
      <sub><b>Jeb Stone</b></sub>
      <br />
      <a href="https://github.com/jeb-stone"><img src="src/assets/icons/github-mark.png" width="20px;" alt=""/></a>
      <a href="https://www.linkedin.com/in/jeb-stone/"><img src="src/assets/icons/linkedin.png" width="20px;" alt=""/></a>
    </td>
  </tr>
</table>

---

# License
MIT Licensed
    