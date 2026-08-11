import re,sys
p='js/qoutes.js'
s=open(p,'r',encoding='utf-8').read()
pattern=re.compile(r"\{\s*reference:\s*\"([^\"]+)\".*?phrase:\s*\"([^\"]+)\".*?speaker:\s*\"([^\"]+)\".*?options:\s*\[([^\]]+)\]",re.S)
matches=pattern.findall(s)
print('Found entries:',len(matches))
errors=[]
for i,(ref,phrase,speaker,opts) in enumerate(matches):
    ops=[o.strip().strip('"').strip() for o in re.findall(r'"([^"]+)"',opts)]
    if len(ops)!=4:
        errors.append(f'Entry {i} {ref} has {len(ops)} options')
    if speaker not in ops:
        errors.append(f'Entry {i} {ref} speaker "{speaker}" not in options {ops}')
    if not phrase:
        errors.append(f'Entry {i} {ref} missing phrase')

if errors:
    print('Issues found:')
    for e in errors[:200]: print('-',e)
    sys.exit(2)
else:
    print('All entries look good.')
