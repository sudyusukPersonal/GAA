import React, { useEffect, useRef, useState } from "react";

const App = () => {
  // State for filter buttons
  const [activeFilter, setActiveFilter] = useState("ALL");

  return (
    <div className="app-wrapper">
      <style>
        {`
          :root {
            --american-red: #bf0a30;
            --american-blue: #002868;
            --american-white: #ffffff;
          }
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
          }
          
          body {
            background-color: var(--american-white);
            color: #333333;
            overflow-x: hidden;
          }
          
          .header {
            background: linear-gradient(135deg, var(--american-blue) 0%, var(--american-red) 100%);
            color: var(--american-white);
            padding: 20px 0;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            position: relative;
            overflow: hidden;
            border-bottom: 4px solid var(--american-white);
          }
          
          .header::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath fill='%23ffffff' fill-opacity='0.05' d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z'/%3E%3C/svg%3E");
            z-index: 0;
          }
          
          .stars {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
              radial-gradient(2px 2px at 20px 30px, white, rgba(0,0,0,0)),
              radial-gradient(2px 2px at 40px 70px, white, rgba(0,0,0,0)),
              radial-gradient(2px 2px at 50px 160px, white, rgba(0,0,0,0)),
              radial-gradient(2px 2px at 90px 40px, white, rgba(0,0,0,0)),
              radial-gradient(2px 2px at 130px 80px, white, rgba(0,0,0,0)),
              radial-gradient(2px 2px at 160px 120px, white, rgba(0,0,0,0));
            background-repeat: repeat;
            background-size: 200px 200px;
            opacity: 0.3;
            z-index: 1;
            animation: twinkle 5s infinite;
          }
          
          @keyframes twinkle {
            0% { opacity: 0.1; }
            50% { opacity: 0.9; }
            100% { opacity: 0.1; }
          }
          
          .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
            z-index: 2;
          }
          
          .logo-container {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px 0;
          }
          
          .logo {
            text-align: center;
            color: var(--american-white);
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .logo-line {
            font-weight: 800;
            text-transform: uppercase;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            display: block;
            line-height: 1;
          }
          
          .logo-line-1 {
            font-size: 3rem;
            color: var(--american-red);
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          }
          
          .logo-line-2 {
            font-size: 4.5rem;
            color: var(--american-white);
            letter-spacing: 2px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          }
          
          .logo-line-3 {
            font-size: 3.8rem;
            color: var(--american-blue);
            letter-spacing: 3px;
            font-weight: 900;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          }
          
          .american-flag-icon {
            width: 60px;
            height: 45px;
            margin-bottom: 15px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 600'%3E%3Crect width='900' height='600' fill='%23bf0a30'/%3E%3Cg fill='%23ffffff'%3E%3Crect y='46.15' width='900' height='46.15'/%3E%3Crect y='138.45' width='900' height='46.15'/%3E%3Crect y='230.75' width='900' height='46.15'/%3E%3Crect y='323.05' width='900' height='46.15'/%3E%3Crect y='415.35' width='900' height='46.15'/%3E%3Crect y='507.65' width='900' height='46.15'/%3E%3C/g%3E%3Crect width='346.15' height='323.08' fill='%23002868'/%3E%3Cg fill='rgba(255, 255, 255, 0.9)'%3E%3Ccircle cx='40' cy='40' r='15'/%3E%3Ccircle cx='120' cy='40' r='15'/%3E%3Ccircle cx='200' cy='40' r='15'/%3E%3Ccircle cx='280' cy='40' r='15'/%3E%3Ccircle cx='80' cy='80' r='15'/%3E%3Ccircle cx='160' cy='80' r='15'/%3E%3Ccircle cx='240' cy='80' r='15'/%3E%3Ccircle cx='40' cy='120' r='15'/%3E%3Ccircle cx='120' cy='120' r='15'/%3E%3Ccircle cx='200' cy='120' r='15'/%3E%3Ccircle cx='280' cy='120' r='15'/%3E%3Ccircle cx='80' cy='160' r='15'/%3E%3Ccircle cx='160' cy='160' r='15'/%3E%3Ccircle cx='240' cy='160' r='15'/%3E%3Ccircle cx='40' cy='200' r='15'/%3E%3Ccircle cx='120' cy='200' r='15'/%3E%3Ccircle cx='200' cy='200' r='15'/%3E%3Ccircle cx='280' cy='200' r='15'/%3E%3Ccircle cx='80' cy='240' r='15'/%3E%3Ccircle cx='160' cy='240' r='15'/%3E%3Ccircle cx='240' cy='240' r='15'/%3E%3Ccircle cx='40' cy='280' r='15'/%3E%3Ccircle cx='120' cy='280' r='15'/%3E%3Ccircle cx='200' cy='280' r='15'/%3E%3Ccircle cx='280' cy='280' r='15'/%3E%3C/g%3E%3C/svg%3E");
            background-size: cover;
            background-position: center;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            border-radius: 3px;
            animation: wave 6s infinite ease-in-out;
            transform-origin: center left;
          }

          @keyframes wave {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(5deg); }
            75% { transform: rotate(-5deg); }
          }
          
          .nav {
            margin-top: 10px;
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            padding-top: 15px;
          }
          
          .nav-list {
            list-style: none;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
          }
          
          .nav-item {
            margin: 0 15px;
          }
          
          .nav-link {
            color: var(--american-white);
            text-decoration: none;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            padding: 10px 15px;
            border-radius: 5px;
            transition: all 0.3s ease;
          }
          
          .nav-link:hover {
            background-color: rgba(255, 255, 255, 0.1);
            transform: translateY(-2px);
          }
          
          .hero {
            background-color: var(--american-blue);
            background-image: linear-gradient(rgba(0, 40, 104, 0.8), rgba(0, 40, 104, 0.8)), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 600'%3E%3Crect width='900' height='600' fill='%23bf0a30'/%3E%3Cg fill='%23ffffff'%3E%3Crect y='46.15' width='900' height='46.15'/%3E%3Crect y='138.45' width='900' height='46.15'/%3E%3Crect y='230.75' width='900' height='46.15'/%3E%3Crect y='323.05' width='900' height='46.15'/%3E%3Crect y='415.35' width='900' height='46.15'/%3E%3Crect y='507.65' width='900' height='46.15'/%3E%3C/g%3E%3Crect width='346.15' height='323.08' fill='%23002868'/%3E%3Cg fill='rgba(255, 255, 255, 0.2)'%3E%3Ccircle cx='40' cy='40' r='15'/%3E%3Ccircle cx='120' cy='40' r='15'/%3E%3Ccircle cx='200' cy='40' r='15'/%3E%3Ccircle cx='280' cy='40' r='15'/%3E%3Ccircle cx='80' cy='80' r='15'/%3E%3Ccircle cx='160' cy='80' r='15'/%3E%3Ccircle cx='240' cy='80' r='15'/%3E%3Ccircle cx='40' cy='120' r='15'/%3E%3Ccircle cx='120' cy='120' r='15'/%3E%3Ccircle cx='200' cy='120' r='15'/%3E%3Ccircle cx='280' cy='120' r='15'/%3E%3Ccircle cx='80' cy='160' r='15'/%3E%3Ccircle cx='160' cy='160' r='15'/%3E%3Ccircle cx='240' cy='160' r='15'/%3E%3Ccircle cx='40' cy='200' r='15'/%3E%3Ccircle cx='120' cy='200' r='15'/%3E%3Ccircle cx='200' cy='200' r='15'/%3E%3Ccircle cx='280' cy='200' r='15'/%3E%3Ccircle cx='80' cy='240' r='15'/%3E%3Ccircle cx='160' cy='240' r='15'/%3E%3Ccircle cx='240' cy='240' r='15'/%3E%3Ccircle cx='40' cy='280' r='15'/%3E%3Ccircle cx='120' cy='280' r='15'/%3E%3Ccircle cx='200' cy='280' r='15'/%3E%3Ccircle cx='280' cy='280' r='15'/%3E%3C/g%3E%3C/svg%3E");
            background-size: 400px;
            background-position: center;
            color: var(--american-white);
            padding: 60px 0;
            text-align: center;
            margin-bottom: 40px;
            border-bottom: 5px solid var(--american-red);
            position: relative;
            overflow: hidden;
          }
          
          .hero::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            z-index: 0;
          }
          
          .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 20px;
            font-weight: 800;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            text-transform: uppercase;
            position: relative;
          }
          
          .hero p {
            font-size: 1.2rem;
            max-width: 800px;
            margin: 0 auto 30px;
            line-height: 1.6;
            position: relative;
          }
          
          .american-eagle {
            position: absolute;
            top: 20px;
            right: 20px;
            width: 160px;
            height: 160px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='%23ffffff' d='M50,10c-22.1,0-40,17.9-40,40s17.9,40,40,40s40-17.9,40-40S72.1,10,50,10z M50,85c-19.3,0-35-15.7-35-35s15.7-35,35-35s35,15.7,35,35S69.3,85,50,85z'/%3E%3Cpath fill='%23ffffff' d='M67.7,36.3c0,0-1.9-2.3-5.8-0.6c-3.9,1.7-4.4,5.2-4.4,6.8c0,1.6,0.5,5.1,4.4,6.8c3.9,1.7,5.8-0.6,5.8-0.6'/%3E%3Cpath fill='%23ffffff' d='M32.3,36.3c0,0,1.9-2.3,5.8-0.6c3.9,1.7,4.4,5.2,4.4,6.8c0,1.6-0.5,5.1-4.4,6.8c-3.9,1.7-5.8-0.6-5.8-0.6'/%3E%3Cpath fill='%23ffffff' d='M50,55c-1.1,0-2,0.9-2,2v15c0,1.1,0.9,2,2,2s2-0.9,2-2V57C52,55.9,51.1,55,50,55z'/%3E%3Cpath fill='%23ffffff' d='M50,30c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8S54.4,30,50,30z M50,42c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S52.2,42,50,42z'/%3E%3C/svg%3E");
            background-size: contain;
            background-repeat: no-repeat;
            opacity: 0.15;
          }
          
          .btn {
            display: inline-block;
            background-color: var(--american-red);
            color: var(--american-white);
            padding: 15px 30px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: all 0.3s ease;
            border: 2px solid var(--american-red);
            cursor: pointer;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
          
          .btn:hover {
            background-color: transparent;
            color: var(--american-white);
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          }
          
          .filter-container {
            margin-bottom: 30px;
            background-color: var(--american-white);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            position: relative;
            overflow: hidden;
            border: 1px solid #ddd;
          }
          
          .filter-container::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(to right, var(--american-red), var(--american-blue));
          }
          
          .filter-title {
            font-weight: 800;
            margin-right: 15px;
            color: var(--american-blue);
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          
          .filter-options {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
          }
          
          .filter-btn {
            background-color: #f5f5f5;
            color: #333;
            border: none;
            padding: 8px 15px;
            border-radius: 50px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          
          .filter-btn:hover, .filter-btn.active {
            background-color: var(--american-red);
            color: var(--american-white);
          }
          
          .search-container {
            position: relative;
            margin-left: auto;
          }
          
          .search-input {
            padding: 10px 15px 10px 40px;
            border-radius: 50px;
            border: 1px solid #ddd;
            width: 100%;
            min-width: 250px;
            font-size: 1rem;
          }
          
          .search-icon {
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: #777;
          }
          
          .posts-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 30px;
            margin-bottom: 50px;
          }
          
          .post-card {
            background-color: var(--american-white);
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
            transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            border: 1px solid #eee;
            display: flex;
            flex-direction: column;
            position: relative;
          }
          
          .post-card.animated {
            transform: translateY(-15px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
            border-color: var(--american-red);
          }
          
          .post-card::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(to right, var(--american-red), var(--american-blue));
            transform: scaleX(0);
            transition: transform 0.4s ease;
            transform-origin: left;
          }
          
          .post-card.animated::after {
            transform: scaleX(1);
          }
          
          .post-image {
            width: 100%;
            height: 220px;
            object-fit: cover;
          }
          
          .post-content {
            padding: 25px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
          }
          
          .post-category {
            color: var(--american-red);
            font-weight: 800;
            text-transform: uppercase;
            font-size: 0.85rem;
            margin-bottom: 10px;
            letter-spacing: 1.5px;
            display: inline-block;
            position: relative;
          }
          
          .post-category::after {
            content: "";
            position: absolute;
            bottom: -3px;
            left: 0;
            width: 40px;
            height: 2px;
            background-color: var(--american-blue);
          }
          
          .post-title {
            font-size: 1.5rem;
            font-weight: 800;
            margin-bottom: 15px;
            color: var(--american-blue);
            line-height: 1.3;
            text-transform: uppercase;
          }
          
          .post-excerpt {
            color: #555;
            line-height: 1.7;
            margin-bottom: 20px;
            font-size: 1.05rem;
          }
          
          .post-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: auto;
            font-size: 0.9rem;
            color: #777;
            padding-top: 15px;
            border-top: 1px solid #eee;
          }
          
          .post-author {
            display: flex;
            align-items: center;
          }
          
          .author-avatar {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            margin-right: 10px;
            border: 2px solid var(--american-blue);
          }
          
          .post-stats {
            display: flex;
            align-items: center;
          }
          
          .post-stats span {
            display: flex;
            align-items: center;
            margin-left: 15px;
          }
          
          .post-stats i {
            margin-right: 5px;
            color: var(--american-blue);
          }
          
          .load-more {
            text-align: center;
            margin: 50px 0;
          }
          
          .footer {
            background-color: var(--american-blue);
            color: var(--american-white);
            padding: 60px 0 20px;
            position: relative;
            overflow: hidden;
          }
          
          .footer::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 5px;
            background: linear-gradient(to right, var(--american-red), var(--american-white), var(--american-blue));
          }
          
          .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
            margin-bottom: 40px;
          }
          
          .footer-column h3 {
            color: var(--american-white);
            margin-bottom: 25px;
            font-weight: 800;
            font-size: 1.3rem;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            position: relative;
            display: inline-block;
          }
          
          .footer-column h3::after {
            content: "";
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 60px;
            height: 3px;
            background-color: var(--american-red);
          }
          
          .footer-links {
            list-style: none;
          }
          
          .footer-link {
            margin-bottom: 12px;
          }
          
          .footer-link a {
            color: #ccc;
            text-decoration: none;
            transition: all 0.3s ease;
            display: inline-block;
          }
          
          .footer-link a:hover {
            color: var(--american-white);
            transform: translateX(5px);
          }
          
          .social-links {
            display: flex;
            gap: 15px;
            margin-top: 25px;
          }
          
          .social-link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            color: var(--american-white);
            text-decoration: none;
            transition: all 0.3s ease;
          }
          
          .social-link:hover {
            background-color: var(--american-red);
            transform: translateY(-5px);
          }
          
          .copyright {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            color: #999;
            font-size: 0.9rem;
            position: relative;
          }
          
          .us-flag-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 600'%3E%3Crect width='900' height='600' fill='%23bf0a30'/%3E%3Cg fill='%23ffffff'%3E%3Crect y='46.15' width='900' height='46.15'/%3E%3Crect y='138.45' width='900' height='46.15'/%3E%3Crect y='230.75' width='900' height='46.15'/%3E%3Crect y='323.05' width='900' height='46.15'/%3E%3Crect y='415.35' width='900' height='46.15'/%3E%3Crect y='507.65' width='900' height='46.15'/%3E%3C/g%3E%3Crect width='346.15' height='323.08' fill='%23002868'/%3E%3Cg fill='%23ffffff'%3E%3C/g%3E%3C/svg%3E");
            background-size: contain;
            opacity: 0.03;
            z-index: 0;
          }
          
          .newsletter-form {
            margin-top: 20px;
          }
          
          .newsletter-input {
            padding: 12px 15px;
            border-radius: 5px;
            border: none;
            width: 100%;
            margin-bottom: 15px;
            background-color: rgba(255, 255, 255, 0.1);
            color: var(--american-white);
          }
          
          .newsletter-input::placeholder {
            color: rgba(255, 255, 255, 0.5);
          }
          
          .pulse {
            animation: pulse 2s infinite;
          }
          
          @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
            100% {
                transform: scale(1);
            }
          }
          
          .ribbon {
            position: absolute;
            top: 0;
            right: 0;
            width: 150px;
            height: 150px;
            overflow: hidden;
          }
          
          .ribbon-content {
            position: absolute;
            display: block;
            width: 225px;
            padding: 15px 0;
            background-color: var(--american-red);
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
            color: var(--american-white);
            font-size: 0.8rem;
            text-transform: uppercase;
            text-align: center;
            font-weight: 700;
            left: -25px;
            top: 30px;
            transform: rotate(45deg);
          }
          
          @media (max-width: 768px) {
            .posts-container {
                grid-template-columns: 1fr;
            }
            
            .nav-list {
                flex-direction: column;
                align-items: center;
            }
            
            .nav-item {
                margin: 5px 0;
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .filter-container {
                flex-direction: column;
                align-items: flex-start;
                gap: 15px;
            }
            
            .search-container {
                width: 100%;
                margin-top: 15px;
            }
            
            .search-input {
                width: 100%;
            }
            
            .american-eagle {
                display: none;
            }
            
            .logo-line-1 {
                font-size: 2.5rem;
            }
            
            .logo-line-2 {
                font-size: 3.5rem;
            }
            
            .logo-line-3 {
                font-size: 3rem;
            }
          }
          
          /* Freedom Stars Animation */
          .freedom-stars {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 1;
          }
          
          .freedom-star {
            position: absolute;
            width: 3px;
            height: 3px;
            background-color: var(--american-white);
            border-radius: 50%;
            opacity: 0;
            animation: freedom-star-animation 3s linear infinite;
          }
          
          @keyframes freedom-star-animation {
            0% {
                opacity: 0;
                transform: translateY(0);
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                opacity: 0;
                transform: translateY(-100px);
            }
          }
        `}
      </style>

      <FreedomStars />

      <header className="header">
        <div className="stars"></div>
        <div className="container">
          <div className="logo-container">
            <div className="logo">
              <div className="american-flag-icon"></div>
              <span className="logo-line logo-line-1">GREAT</span>
              <span className="logo-line logo-line-2">AMERICA</span>
              <span className="logo-line logo-line-3">AGAIN</span>
            </div>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  TOPICS
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  TRENDING
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  LATEST NEWS
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  EVENTS
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  COMMUNITY
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="american-eagle"></div>
        <div className="container">
          <h1>SHARE HOW AMERICA IS WINNING AGAIN!</h1>
          <p>
            Join patriots across America in sharing REAL SUCCESS STORIES of how
            our policies are MAKING AMERICA GREAT AGAIN. Your voice matters in
            the fight to restore American greatness!
          </p>
          <a href="#" className="btn pulse">
            SHARE YOUR STORY <i className="fas fa-plus-circle ml-2"></i>
          </a>
        </div>
      </section>

      <main className="container">
        <div className="filter-container">
          <div>
            <span className="filter-title">FILTER BY:</span>
            <div className="filter-options">
              {[
                "ALL",
                "ECONOMY",
                "JOBS",
                "SECURITY",
                "IMMIGRATION",
                "HEALTHCARE",
                "ENERGY",
              ].map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${
                    activeFilter === category ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="search-container">
            <i className="fas fa-search search-icon"></i>
            <input
              type="text"
              className="search-input"
              placeholder="Search for patriotic stories..."
            />
          </div>
        </div>

        <PostsList activeFilter={activeFilter} />

        <div className="load-more">
          <button className="btn">
            LOAD MORE STORIES <i className="fas fa-angle-down"></i>
          </button>
        </div>
      </main>

      <footer className="footer">
        <div className="us-flag-background"></div>
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>About Us</h3>
              <p>
                Great America Rising is the platform where patriots share REAL
                stories about how our policies are creating jobs, securing
                borders, and restoring American greatness!
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-telegram"></i>
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li className="footer-link">
                  <a href="#">HOME</a>
                </li>
                <li className="footer-link">
                  <a href="#">TRENDING POSTS</a>
                </li>
                <li className="footer-link">
                  <a href="#">CATEGORIES</a>
                </li>
                <li className="footer-link">
                  <a href="#">EVENTS</a>
                </li>
                <li className="footer-link">
                  <a href="#">OFFICIAL STATEMENTS</a>
                </li>
                <li className="footer-link">
                  <a href="#">NEWSLETTER</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Support</h3>
              <ul className="footer-links">
                <li className="footer-link">
                  <a href="#">HELP CENTER</a>
                </li>
                <li className="footer-link">
                  <a href="#">COMMUNITY GUIDELINES</a>
                </li>
                <li className="footer-link">
                  <a href="#">CONTACT US</a>
                </li>
                <li className="footer-link">
                  <a href="#">PRIVACY POLICY</a>
                </li>
                <li className="footer-link">
                  <a href="#">TERMS OF SERVICE</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Newsletter</h3>
              <p>Get the latest WINNING stories delivered to your inbox!</p>
              <form className="newsletter-form">
                <input
                  type="email"
                  placeholder="YOUR EMAIL"
                  className="newsletter-input"
                />
                <button type="submit" className="btn" style={{ width: "100%" }}>
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
          <div className="copyright">
            <p>
              &copy; 2025 Great America Rising. All Rights Reserved. | STANDING
              TOGETHER FOR AMERICAN GREATNESS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// 自由の星アニメーションコンポーネント
const FreedomStars = () => {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createFreedomStar = () => {
      if (!starsRef.current) return;

      const star = document.createElement("div");
      star.classList.add("freedom-star");

      // Random horizontal position
      const xPos = Math.random() * window.innerWidth;
      star.style.left = `${xPos}px`;

      // Random bottom position (will rise up)
      const yPos = Math.random() * 100 + window.innerHeight - 100;
      star.style.top = `${yPos}px`;

      // Random delay
      const delay = Math.random() * 10;
      star.style.animationDelay = `${delay}s`;

      // Random size
      const size = Math.random() * 3 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      starsRef.current.appendChild(star);

      // Remove the star after animation completes
      setTimeout(() => {
        if (star.parentNode === starsRef.current) {
          if (starsRef.current) {
            starsRef.current.removeChild(star);
          }
        }
      }, 10000);
    };

    // Create stars periodically
    const interval = setInterval(createFreedomStar, 300);

    // Initial stars
    for (let i = 0; i < 20; i++) {
      createFreedomStar();
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div className="freedom-stars" ref={starsRef}></div>;
};

// 投稿一覧コンポーネント
interface PostsListProps {
  activeFilter: string;
}

const PostsList: React.FC<PostsListProps> = ({ activeFilter }) => {
  const [posts] = useState([
    {
      id: 1,
      category: "ECONOMY",
      title: "WINNING: Inflation DOWN, My Family Saving $200/Month!",
      excerpt:
        "Thanks to our President's economic policies, prices are DOWN and my family is saving BIG! Groceries and gas prices finally under control. This is what REAL leadership looks like! 🇺🇸",
      image: "/api/placeholder/400/320",
      author: "PatriotJohn",
      likes: 245,
      comments: 32,
      isTopStory: true,
    },
    {
      id: 2,
      category: "JOBS",
      title: "AMERICA FIRST: Factory Reopened, 300 NEW Jobs in My Town!",
      excerpt:
        "The factory that closed 10 years ago under the FAILED policies of the past is NOW OPEN! 300 AMERICAN jobs created in my hometown. This is what happens when we put AMERICA FIRST!",
      image: "/api/placeholder/400/320",
      author: "TrueAmerican76",
      likes: 189,
      comments: 27,
    },
    {
      id: 3,
      category: "SECURITY",
      title: "BORDER SECURE: Crime Rate DOWN 23% in My Neighborhood!",
      excerpt:
        "With STRONG border enforcement, crime in my neighborhood is DOWN 23%! I can walk at night again and my kids can play outside SAFELY. This is what PROTECTING AMERICANS looks like!",
      image: "/api/placeholder/400/320",
      author: "USADefender",
      likes: 312,
      comments: 45,
    },
    {
      id: 4,
      category: "ECONOMY",
      title: "TAX CUTS WORKING: Small Business BOOMING with 35% Growth!",
      excerpt:
        "My business grew 35% this year thanks to the MASSIVE tax cuts! Hired 5 new AMERICAN workers and expanding operations. This is how you UNLEASH the American economy!",
      image: "/api/placeholder/400/320",
      author: "BusinessPatriot",
      likes: 178,
      comments: 19,
    },
    {
      id: 5,
      category: "ENERGY",
      title: "ENERGY INDEPENDENCE: Electric Bill DOWN 30%!",
      excerpt:
        "American energy independence is REAL! My electric bill is DOWN 30% and high-paying energy jobs are BACK in my community. No more dependence on foreign oil! 🇺🇸",
      image: "/api/placeholder/400/320",
      author: "EnergyFreedom",
      likes: 254,
      comments: 38,
    },
    {
      id: 6,
      category: "HEALTHCARE",
      title: "FREEDOM IN HEALTHCARE: Family Saving $1,500/Year on Insurance!",
      excerpt:
        "Our family is saving $1,500 a year with the NEW healthcare policies! More CHOICES, better COVERAGE, lower COSTS. This is what happens when government gets OUT OF THE WAY!",
      image: "/api/placeholder/400/320",
      author: "Liberty4All",
      likes: 167,
      comments: 23,
    },
  ]);

  // フィルター適用
  const filteredPosts =
    activeFilter === "ALL"
      ? posts
      : posts.filter((post) => post.category === activeFilter);

  // 交差監視のためのref
  const postRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // 交差監視の設定
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 表示された時にanimatedクラスを追加
            setTimeout(() => {
              entry.target.classList.add("animated");
            }, Math.random() * 300);
          } else {
            // 画面から消えた時にanimatedクラスを削除
            entry.target.classList.remove("animated");
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    // 全てのカードを監視対象に
    const currentRefs = postRefs.current;
    currentRefs.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      currentRefs.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [filteredPosts]);

  return (
    <div className="posts-container">
      {filteredPosts.map((post, index) => (
        <div
          key={post.id}
          className="post-card"
          ref={(el) => {
            postRefs.current[index] = el;
          }}
        >
          {post.isTopStory && (
            <div className="ribbon">
              <span className="ribbon-content">TOP STORY</span>
            </div>
          )}
          <img src={post.image} alt={post.title} className="post-image" />
          <div className="post-content">
            <div className="post-category">{post.category}</div>
            <h3 className="post-title">{post.title}</h3>
            <p className="post-excerpt">{post.excerpt}</p>
            <div className="post-meta">
              <div className="post-author">
                <img
                  src="/api/placeholder/50/50"
                  alt={post.author}
                  className="author-avatar"
                />
                <span>{post.author}</span>
              </div>
              <div className="post-stats">
                <span>
                  <i className="fas fa-heart"></i> {post.likes}
                </span>
                <span>
                  <i className="fas fa-comment"></i> {post.comments}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
