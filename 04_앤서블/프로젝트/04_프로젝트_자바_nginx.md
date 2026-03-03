# was
---
- name: Setup WAS Server
  hosts: was
  become: yes

  tasks:

    - name: Install Java
      apt:
        name: openjdk-17-jdk
        state: present
        update_cache: yes

    - name: Install nginx
      apt:
        name: nginx
        state: present

    - name: Start nginx
      systemd:
        name: nginx
        state: started
        enabled: yes