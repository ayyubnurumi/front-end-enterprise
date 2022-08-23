users = {"aku": "aktif", "kamu": "ga aktif", "dia": "aktif"}

for user, status in users.copy().items():
    if status == "ga aktif":
        del users[user]

active_users = {}
for user, status in users.items():
    if status == "aktif":
        active_users[user] = status

print(users)
print(active_users)