'use client';

import React, { useEffect, useState } from 'react';

import MoonIcon from '@heroicons/react/24/outline/MoonIcon';
import SunIcon from '@heroicons/react/24/outline/SunIcon';

const ThemeToggle: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<string>('');

  useEffect(() => {
    let theme = localStorage.getItem('theme');
    if (!theme) {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        theme = 'dark';
      } else {
        theme = 'light';
      }
      localStorage.setItem('theme', theme);
    }
    setCurrentTheme(theme);

    [...document.querySelectorAll('[data-toggle-theme]')].forEach((el) => {
      el.addEventListener('click', toggleTheme);
    });

    return () =>
      [...document.querySelectorAll('[data-toggle-theme]')].forEach((el) =>
        el.removeEventListener('click', toggleTheme)
      );
  }, []);

  function toggleTheme(evt: any) {
    var themesList = evt.target.getAttribute('data-toggle-theme');
    if (themesList) {
      var themesArray = themesList.split(',');
      if (
        document.documentElement.getAttribute('data-theme') == themesArray[0]
      ) {
        if (themesArray.length == 1) {
          document.documentElement.removeAttribute('data-theme');
          localStorage.removeItem('theme');
        } else {
          document.documentElement.setAttribute('data-theme', themesArray[1]);
          localStorage.setItem('theme', themesArray[1]);
        }
      } else {
        document.documentElement.setAttribute('data-theme', themesArray[0]);
        localStorage.setItem('theme', themesArray[0]);
      }
    }
  }

  return (
    <label className="swap swap-rotate btn btn-ghost btn-circle">
      <input type="checkbox" data-toggle-theme="light,dark" />
      <MoonIcon
        className={
          'fill-current w-6 h-6 ' +
          (currentTheme === 'dark' ? 'swap-on' : 'swap-off')
        }
      />
      <SunIcon
        className={
          'fill-current w-6 h-6 ' +
          (currentTheme === 'light' ? 'swap-on' : 'swap-off')
        }
      />
    </label>
  );
};

export default ThemeToggle;
